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
    "een1N8TbHLEd5PgENY8WHx8Uwm2GV1mDa9X1ZRKQpZRDxJq1kE5JPfx2Cs5pupajx6uAoPp48VvscpdU7GMYtUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5myJiV1h1vhrir8NPZq37xba984dxYTSEXxrH6YrYNe96gZGv4jpuTPGixqEQMPvuqnfD39QJ9TqUtMjDFCyzhBV",
  "key1": "56mYyftCe3YNBtUw2vV2quaC99fzXg5HALHxsQLuf7u7m4JuLMqPq5VN3rVE2QJCL8fzoGjcdmGcdtzsq8vmcxzU",
  "key2": "5wwNtNExBdRFKcJW48S58hPnzV28CKVFeRvRmUywH4isFeH7AqBdajLck72GNhWK9eSGczgtW83eYascSAp8GtUw",
  "key3": "4YeNP4VSxojH816iJ6vRobK2sgoAqiY2PJ74r4HHAURcR9ezNJK6d5DAhxgVfrJ1jF72mYapckNuMZRfa52QCxZa",
  "key4": "QaYNzPSvEsXuUondo9jgLMcauAEa4fANqvGxDX2bZD1rFU1fKRQXhtoDx2rboUFT3tmyQ7HZmAmVisNh7mrX6CD",
  "key5": "44b5j1Z4DeEzWJpXGJo4Mg2AohF8QLLGKAkbfyUFBKZn3YcMBKE2anktr1XSLDA8v8SuKT7Ddc787qeu6WJEfXsX",
  "key6": "5VAarvQ93vVdPqghfcgDoNVqicAyBBcUyPQvnqVpeCmBvohjhNccbnjiuzYCM85YJqebF2XdEkaUKtzbxj7QxE7Q",
  "key7": "4xjvNpjZsAyiaRaFEv98NoxtdZDqq9tRkg4mYmT4ysCpMe3xKdp1wqJK9HL7yFY9oVK7w4D6EPuNHuEBC3oDCoD8",
  "key8": "4KeVKGNUnQGzmh4VyD2oUUDy1A1MiPBLJm4YHC24kr9ppYqtxX27hMBH8hmzRhHfL35jTH7iTRDRSrEsqrLPpmZp",
  "key9": "BhjKSFq8Fn49Wr2N2ScEnhFXPBacA4RRL9EzEqrL3pm2yaSrQ5TYiHPWxx6znJns53MYiaimCHmpfDtHxyC7z4J",
  "key10": "5Ptjt7Ewx5g8ZCrw4b9NcTDsD4crQ1L8N9EH3vwr8dumywvj5CH6odQFSp2vXV62xWwjQtAf1PwoZ8dJjrBMGtrx",
  "key11": "24vbK17UNpsn2sYgVFm17GPPTcptxWCVxiRPRSGtwhzWu2uFGJpdKTXURmHAL6HqS2sVKvvnjS1tq9oVcP8kpLft",
  "key12": "4zP72R1v7gsVYvg9SM9ArThD3UTgmkikijo5w2sToYXewScJXVopKJRCBVhgqd3wcjBwKaEmXScBSKtmtmGHTfPS",
  "key13": "3DeCSVkQSqdEbBtKW5tSyRd8cmKQwxCESSauAcjeQ6g3NuxW1Kjrq193QHB58z61e1xv8jr4BkWMKr1pgyb8GmE7",
  "key14": "4cb1WwN91dccgBNZBmgmx65KMxhPHWZGQZvEzrCZkmiiYfh5s1SNk4g1F1UFAeGtYCdii7Soxu1i61BY9vrQfqR1",
  "key15": "2MMp1FPRSNoTg2bjRsomTeGLauan2VyJn9sbg6q9poYjtmaaVuM8e3ApVsqmfVSEEwrf5oWu1Myxhi4SxKt3dE5b",
  "key16": "2aA6zbwEJpMYhPEEHZKAXnb7bAyaHV5op3CWZgTPMwXeSevKSSHphoChLGQdAtotRA2QKPKSECHDxgQFVMMTy8QY",
  "key17": "4eFyoHVN7bRHnEbWd9sZajBFFXiZFsZZMoWNT2vUK4gWZDZbPkFahXzdQv1z5PYwAbrDQYXRndy61n2fP5g6vFHo",
  "key18": "3YKRiGDCCyRy6JL4nDwYoTuQJjM31zBNakdUWW7pqoHKdWNPqnbjQLsWmnQDeEoz3NvwALjH66gK44PcH1EcRNUN",
  "key19": "2RsNXkXgYD395pQaPYJ5Rz4rLnjdaptmDJdABc47JPP5LnhUBfa6PGpZCqTd1wWka77pa6ycGnwFzoWTqF6pWKzE",
  "key20": "2mjSvtbfvCpDYW3KoJHDH5N7NtAGeKfiN7fZQNNo1rAhZVfYN7UZZR2ZERkvHfjk3hymsb92HPNDE3XQWLmyjNhU",
  "key21": "2cp1thWa7TSeU7GmTT4Zbpfkar3R4VPEs2jaV6bFsFjkpgTfvWprdouzgw5wVdoVoY74DAU9yFyBReYwAY3JKSep",
  "key22": "4PLMKH1Ny8biPa6oW1shpMfijULKRU3RgvF1SUJe1skYKc7JHHrv3s2PpGT4LSoNXQzcGkJcMqremzVwzFm2jzgF",
  "key23": "39FUABoJiLCHWzfeSW383AmfNcdsANphjA1A3aXu9FsHcYp2DqW3Zq8k8TBeLCg3SvhprNzru39wEXSEy84iUvq7",
  "key24": "2Wp7xyUugKSgyTyyXU5vf1tZ94RgYygEep6RUmnkg3EYxiRUNFiDhAfnin6kUmLuCWkCNSRV4rn6LXci6NcBvTRw",
  "key25": "3NNW7xyMyteBqeKzpPa4WKxh7Heeg6mcXeGf4VL8WkmwZGGMYWU5ehAh3dux3StLUSmxYjHpJ8MJmpQgawZUAH7S",
  "key26": "4UbA3iWXQQVUVp77XvSsBVxJWT67Ly3rhzi8VTfP9X46dbSC4VPphX3oBzacxxyuT9cfvYNWHF231XgphwhFbPyS",
  "key27": "TSCssrGHTEEgXt2taPAPdeDkURARa4rhP4REE6urKngJmW5Y2d8imGxNc9szCoa7FkUAmBya36EYHyDqe72YTGF",
  "key28": "3CpU3WuYZvMrXywCDv85TrttatuQxiiPbJ4DmhQbsRoXjeDJvTkwV7c5u1tnRgP3S8orG9TexCczgdNJRHVfnUpF",
  "key29": "2vK7ugRdDk8pahDyx4pxLbKEwBWQxZ4mF1pUtZHfQkXmSVcChsHdnie9TQW1ftmBAaQUujAeiSnkyyMzGJqjyk1c",
  "key30": "5wRwdC5FoQsypvF8d4vPF8e1Jq3Gm43sZrwyFHTMRAXEDxhTmmPZTfiVEqoTaNVDYREA4peJGRNrkvcGJucV3J1X",
  "key31": "56hKvNy6vd7fCAKz2wphkfsRinb4uFZADBnsAYzyHLtkAAmv7JhT9VHFNoP5TF8HKNcyhaSvzBSZgGHELDbiM1Ze",
  "key32": "3bWgiQgLjiPXWzLvYgpJzxMd264JBqT6DBpTGVRz8gB1bFAkuuDquScAnP4PV3rcqQ5pwjgBo1bv9LKmSbzzYr3v",
  "key33": "4pKurzaHAcc1FpdpfVQu61Bzbcjd9CU9NhcP2yP4ubXF9erhdGVXP8rS1wFSSKjhz9mUjiavZVyG8jpUnPxoJjq2",
  "key34": "3oKzDbPRms4fS2zCdW3ztzuWMdQfxchBqx432eCvLZmcVFrRS6bg6mAY2Dbmzqwivmf9xwHNVVoZRtRY1Q439zq9",
  "key35": "2NKrvGGYRPLUwf7C9iQtCyy662iJRR4XbrUYNedYN9irtaHp6CieyXLci5xiQe7oqjLbXxAugibUQevFGhu6a1qp",
  "key36": "2ziYYL3wUVBddgMfF4p817MoJekkSTvozBapBPZ56uqCU6FcnafxCpHVLyXuiYQsgXjvBob5fCz3srfj9dFh7F78",
  "key37": "3qtEYmyXC2pn6xEvufj77ZjVZoz5KNAfheGpZug5vUUEZGdYT4kTNJ9XKP2qBA9kAAByhrSVVgMdNrADAuZeQpL",
  "key38": "34toS7abTcXmTM7m1jNRc5MQbwjCQ6fuA7qDLMHPbxW5fvY6gD6TwHKyZKiCnCFNMh2eCbzx5VVDxjYd1yemGcNY",
  "key39": "5sWLBsSW7kSmUDZxCxGqXocKj51o8WdpZPKJdtiCiL6jjouAx6iXY2wkMdfGt2NgnECTYYyNVD4MFMKWcxfTGPKC",
  "key40": "64vVEmhJawvp6AwW1st55Ch7NswRUNqGuDqjRDPqXVf7VHFFFv45pyxqaVu8tPzmie4QfXqEUXxGApoDNX94irUp",
  "key41": "2ynGGnbNXAQZbUgD8m8CcWRYgGQfAcUrxNea89pb2BV3fZcVhVgVTwQm4nc6o4Thv8VWc8XAmRAn7v1ZbCRUKqLo",
  "key42": "2f6PK9HWZB1cu4UeXo1xPs5NEaCMYzpHyFSVHe5bFBQ7VW2bdrRSQTfFQM3Rq4nUGgR1sh67tB2mwgjcZf1aHwk3",
  "key43": "4pUzB9ALjKNuyy1zoHZwbBqSuCE4i4d4JASKsxkjUNbmM5YbkUzYon6bikYpKRkFTtmtxhRBYUboqrR476emZHw5",
  "key44": "HEuyJEkee3vDpnGtq9L5gfFTt2uHH2EXe8kqrB6rCVXrjAjBWzQm6HFdbxrFu8Hs8fcAYmGQqL4NiaTHBfSE4wm",
  "key45": "49AB9hQCXpPNxxGFDh9KszLdMz7cQLuA4Ed43oaEDXjvVFSYRimQVQoysiWNyKVtPB2D4GScqvksTAd9GJAznsp4",
  "key46": "3VsiTCbtrDSCUpURuyGP23eLedNACmRpePGuCHYkKiWeHN9DujWYBREhwdB9JkitnuMYvnCenknehcaQ9ceJvNDe",
  "key47": "4ArVXNzPCfBSxxmzcDb5Ypfcjw8DqheTm6VA2sNxfe2KtdeqEMtqjeXGVrEBGDRgR7SNKpMp5WRk2nrcy6aLoJdV"
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
