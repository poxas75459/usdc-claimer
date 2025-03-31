/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "35BDPv1BEgQzFZQe1FoZdyu5P2Eey1xUPDbKYeaxGae2KQewC2ZZKW4ynhg81aDDMGiqSVP4QmENSzVQx5buFZX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "551k76uEPY9uyZeNwRrMtyMWKhGJxUTHpYxZJHRihfDgzHqANCq5Wi75f9DuJ3AKf2HkFg9qx5XhzXGzT6fYzaGy",
  "key1": "3xyKsGDFYhcVRg5TD1HBNfYyi53qQevCKoWa9LtLy7pxfxLT1uUjkH9T9YwzVV5t94boEMXFB3tgdL2Ua1E4frmU",
  "key2": "4m9FjZvawTdjLGyj1cNfDADSsncjmsW5N4x6qHGSWcWhYdLEbggQTR7XUh4XdGeZCrApUZc2P8NWSj82SFvPam7U",
  "key3": "5QYNKahQVbF8Sb5LmrTmmLBz2VpgVBYHZNf81Rvr3m2EbPZbAufHkoS7HUuobXmzt8ibBktpQWsKgXRfdazRCkHc",
  "key4": "2UULnwybWnRQzWE7AG6kg8bSc8N22HgeyWNFqHaxhKYXYMJFsJ4ZdGE5cSPzgit5JD9STy7zuFXBxVWEXT616ZWB",
  "key5": "4q1AAzeFrhf2CgxF28jzqPWbBnVzajXzPMbFx1Yr3C447nPcbTBr4mZhgUUDbY8f7wTWaNkmyhMZWKVsn4u58dnT",
  "key6": "3uP7FtX3D4v2GvZ2hodQ5GtKXjLzwUJZEtvspBn7eESXVte32VXFcU1GEzu1URoujVW3VoT1Ki6Z72EPLCStgcy5",
  "key7": "2zHTYhabDibDZmrmsC4sEEotMacJfUM3mngixqJymuFo3qEA5ELPK8kjBfsmdjhtZmxR7NK7eGXfrsLdhcUxngX8",
  "key8": "58bBiDYXgVJXfpdBe3sTNXGPhMoAuS84fiSscysoLceARHbBzvmQX3mzEsQh9iVWpuXFcfoPZ7iiKiGcxeKyUBiD",
  "key9": "2E3LfT48F5tqmBRJD85TJ7diHVUrkgeEigQVBWP1CfQUr7BdFhYcZyQJKi5zeHsRuvF7emupt9278tPcAhoHYmTK",
  "key10": "dPcxX2W4RQsCTFTJw9hHwPuYHSWX8vcuLSVC2WqmmsAteLx3Gi2D329cjixPmcKpz4HHd8sSRGyK84dqRF6PSjz",
  "key11": "8CnMuNPhV1huyR1RZLHpBrg32MYgCX3L5U1wCFabD6aNAf3d9P6gYxB7MQH8R6b1HuhbdUrX3TAxasLkhb4VVqi",
  "key12": "L598LPnsQeuGDSKZBiZWdpPttgKek6SwssAZNF7ZGjYXTY5kPaUbhwWA2pfN579uNZhM7WetbXsPKXv9jnbUE1f",
  "key13": "2nBug2AKJNnaabBkzFEYCcGsUeQtBJrZCMLcidFoZDPuf3o8EEPhSsAKxo24gk3gbQmoHTCSRT5mspFcH7BMQFMY",
  "key14": "2uuuuMPagTJsiiPAPhYuYBYQJxD15HnV3yKfRvh5rmgmG997X7Fp24BgTHJLiXcGzuih9wo8hzP1A5cFkrAN3286",
  "key15": "5dXW6pmSsK2XsAeyGQfgwbBMVKzxL5hJtPiBQkZGvYbZEbiqPN6qrd6UcrmJnQJdnce9ejFiTyijYDGxD3FoEYVV",
  "key16": "2aYbHQ6LTHKMshe226kSBAuCJfF4W4oqcc7yX1YW6KdiWRgGvDFoTonasTYnseHeg4ugM5NUHUV6BoTiqD35KCBY",
  "key17": "2cvSwRdMERZk44qNCpQAXGY4TyjCoTuApPdmRgufLUsGfMJYJeNiK7VwJVbAy7CKxWUXC7Y3y7vEbopz3LeR85E3",
  "key18": "4WPmPsZPjUEWmpjtgExoP14hWbd9NEhP4EKnhKWM3AixeKYDsRedUHkozopTFPLNfTG9iF6RxRqJBiw2JvXGqcDg",
  "key19": "5oHKeMD5JMHuUYyN7Cv6kWKMcGWWcJyUieTQL5BaWSy1YH1yUz8oANf77xFAqzqb8mXBj3t8jmnk6DT6MrCoLTiA",
  "key20": "5LFfXiw6BrXSccsmEFYWxGeUCRtqbwNf4QBrZohtQ7Uongo8Qwb2n8zrYuEUAMEwDbc7vzKWLLNzEombonBt8Uaa",
  "key21": "DXWMhjgqjc4mpuGTt8UDYPtfNtLhYLZg6tXqecKLAtGv1dDF7V3XL1iSApgHuuR9pShF7PFvwoYsgysGC4tcq2y",
  "key22": "5oSc1vU5yAuTRKFyp3HRRwmxtUCFhK5ErWsz1embASd4qcM4qq6uuqbBikGjoBhcX6Y7qh1ik2SEcvswKBQ9KJ5H",
  "key23": "3nJx9asAoTNKQ35PGhmX6eF8xHF8Ew1qUPEZ8d4yCpG6f4j95e6fxJHAHWHcxPiDJ3dcXzx7kc8aKRZESJ7URLi1",
  "key24": "2A8axvcAvsDpQUNRw1QCb5oQfSJvF517vT3H83zQtGPirtK71m542pTi9m5UptCYP7gf4MXZUkXJMoT6q1ryfmDG",
  "key25": "4b3QdS9oZuunirXmjKoNvuzXm5pjcXem7Yw91SXQiZJdxfFVmQq4D7k3BZijg3fDSZSTfJ8vSzB97RBPedPaYY1y",
  "key26": "3Nrho5RHDtgYYytW77x4wf4inwrmU1xKswf3avhKi9v27ieg7SB3bar6H1gXnv2xCFqsoDWmyrNj2srMoCxe6bua",
  "key27": "DZw6R3Gye6gq8bFqhkCQjHtu7wZKdPwcnTqDY8YRHYypngVjVZhDHLuf4hjqHxVQT8XbXhygpBaLXrMBvBSPqqm",
  "key28": "37KnB2tfxNtmT5MiFeX6hyN58W8C5pvya3HftXiW7j2g4pK31LHUc9Kz9xG5FmtLrW7i1oFcYp6x1FvsCDrQ1Ze2",
  "key29": "61Saa5h7pM1EM8yzQcLFcDrmthpXoHrVRLt9XTNcQJ7QvHRYCmweMkaV9WB52mN6H8PXiawC3QWzTx4iauC2pyxK",
  "key30": "2RCfJk5MTws1cjNDHWjf34RhUHZXf1BHLyM8UDsqa3DbYqwxpQjirxfdmwqyWMKPax1jLtyuwd1FkXWEyV2KwENK",
  "key31": "63B3XuTgkDkdAggVMzFgRLAHSN3TKaJBiGkvSbV3K6svhEuRd4G2xusezPKBhByconmLmM4rPosQD2WJztfNtDrE",
  "key32": "3cP37heQPkoqpd9R7SFAXBuCzPPLu4FehPfZYBEAfR5g8hAfTpH8dqxnd9qMUHxQuxNCiedtGgbfL4LnV4QMt94s",
  "key33": "4KcwgKr4rFYTJutVfZtZwREALC3NRYDdb9EMKDofUiUMRY3DU4JRTe1YcRQtW7QfXbwBhKr4Zue7jaZjj2n76Jjg",
  "key34": "4CvZp76t2xbN2Mxr2uBqxFY16dPC8gpayrGTDazxwDU7wjrwt1hXj2zafC4Ey4kRWersqmpjNX7MZQN1ZfE2Jb5c",
  "key35": "29FertqZWeRNZ71qaWHKjEA6QA9VH6AqfozjyGMZf9rRHemxygbimdezhiKKz4jFoMFtMwhQ6oyF7diTs978bvM7",
  "key36": "39a4Uq6nczMKWyB8xQYKuyMmxoDyqgq9hSi4nU7VAdLRxpyvj3ERuyXUZvnPPH3TN5EHW7U8Fu6smZFwfN94uaWK",
  "key37": "3dhQ8j1WHBycEvJ5UYuoPf9kZz6fm9ieMvmg2Gq1jyKZomaqCXD1YTNx3uQXCb4ncE6EovH2bbRfdg8Ym27bYK7w",
  "key38": "4DA14bNRHbpannz8rQ5mZDjunUE6Z2VhApxTEaDmTqVs8KxTPqy8WqtDqsFiSPVpUF49kKY3z9D1YbgdLMNsQWVB",
  "key39": "65hgRYYALsjYVrqqXqB8sLLMKE7xJFmPJtEoBqZ7bzxLr3dKM2WkshrdsBAqvj5Da9PGp7GjM28kFM2mJ8ch8SUq",
  "key40": "2med8UohbTDV8BmwoTU7nKwK4NSoAKR758hSo2QYJLCS1ibjgithvx9FM3YoVNTr4mMibryVrC5owGayUSLydLMV",
  "key41": "5JQipxXdMHSxJd8E5RWs922VuHE5AYkRPsXGnR9jfnV8zpzFVrMac4mCWuogmLHBTV8jhgonHXQPfHoW5yKFT9ez",
  "key42": "67PEismep23jTzuYZPWTmd6pMzFvqqPNv8b5bdLfK1euEs9UxFaC6JqjfMgoRTDxw2Yvg2kEq9E3sCTk6fvukuWX",
  "key43": "4ZNR4up3ZgWsB1ZdqNd1huQTKpQVSoVwqvYSpdcBeT1JbYVezx9dDnd9c424aEVEKerJ6jEsaivFA2s1c5qubNXC",
  "key44": "5apx2oftFJEJt6FGyQBkR6aoGQfAAxtj4Ms8Dsc3DhZoNJ93aaaS9chkCRzQkPBmwaD9qGZwsSARgDvUrY6v4wu1",
  "key45": "55PfYdKf2bWdqosRUVpTEQrKwtNRFKd82MnZBFDYaePRuYWejVumLBrAiVFmchVvUJviH6ingTTYMCZKqQKzq2LV",
  "key46": "kiRBuKhoA4aygFQbi4SR3zNLdVPxRj6TDxNAK1pvPa9VFDq1aQbgQ8sgzbtscfAZN6ebLEN6go5FAW8jVj7mA45",
  "key47": "5zzmimaQYomNt7ntGDLkA388knrMChqhZRQqBq4Haz6nuwkCrQUisbWFJcL7jhwZNxfHrUJgqEPX7VbqTNkuoWQB",
  "key48": "5sRi3o8m8epsa5NzSkMCFNA6SKKSByQ1oUFR3f8GgYujY89nxkhxxaywYaFxbQMDD2iUgqTJyJcwXEAJKVd78FZD"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
