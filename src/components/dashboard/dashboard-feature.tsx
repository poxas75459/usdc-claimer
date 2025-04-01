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
    "2DJ1zpbnQ21QppauKMzsKYPFk3z5UDz4AVX3DU2AJf9PVjBEeESa1y1B37JCUgs7XDbs1eqh2Cbmqnmyxg88Jcoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nPdYGm7pdz7mdNcd7awTH9z8vr7ux83t4D2MnQdUEbobLyUvp49ssbQwD76NJQ35bTmJpUcHF7PUXvUWTkHDz8M",
  "key1": "4Ur8sZdLbxKwrHoGfQuVTFCn1Ewkn5ez8bRQ6YF2yKpALUce1gmSu6GX94KUTUtj2RK7DRhxuonAEoukMwwoVVsx",
  "key2": "5AWHnoFErw2vosWhqbpenLnj4zo3seNs6EWEXAHAdACdF7YyA9QB9MUrSdk6PaXWZVVswQS2bmgUCoXc1M5qKmGs",
  "key3": "56W8g7tFqT4Fwt7Gr7jaDCj9hvNS5MEHuKSEuBVHbpuNA4PNSZNuuMuPkp54JqwpwG6ByXPiKniqNZdopi11f7nV",
  "key4": "3mXxztXo8EX3aEtLyWeXC9GSRgCN2qCVuy9Uf63uCwUiGzpVGWgLbgrDJGgwnv59L8tB7dDXHcLy4ttC7h456Cu3",
  "key5": "4RQeh1Xar2co1HAYYumRjDvuBb1DdLdSWMxTktu8cDaLCiPSBUUPT3NnbkzLcw9RM8nCNX93xhTgUvopUeWhVdb8",
  "key6": "tiTe4mpVWuruuSF1UigdT3w5zwtaUYemCmTMv9ykyBZVksL5nvYgLPbxcr2hwN1HFXhqxtbQcF6jhASLf4EJ6D4",
  "key7": "LvZgM9aD3Z5TXXW3woCBR6gZUkB8beUgUjufjYPyv43RGXEAFewWRJFzx5Add5RLzCHJWrn5G8PPErdv8gkDGKg",
  "key8": "4aVYwrcTE14TBbJUDn7KF1EjxNxjJ6Yzo4fP61eA7RaMbDSZxdy4RMXYTdFHiLoxjqGuANFVMNncXKiY2vVcYeTL",
  "key9": "4AVR8dFNusnHvXRLzC5dzutACSPYtxuwBDgJmSWuvbHqnu6XTLAHCnwuHk62PrxDuwbmpeSr48gixi9MhYjuPSka",
  "key10": "3bre7fDcQqFnpUpJnGC9CgEjJwcf2bnEyBVBFFxgpaPqeHS3oVxhCFBmG6nTKAKjqdmhLZHxwPKEQ2Y6qspbRWQe",
  "key11": "4CPgxmDRzFLmCWmcLKyh68qzenPbBqQBaaHXThd4YTQp4Hs9E3CZDAyVUzWQxcZkAwKjUhVthnA6Ddf52sEdGByG",
  "key12": "3DCB73ee2DXncTZCeRheD3kkfCBti8HPiSZf5hYsb7Trcy6xB2fFCdDNiirVPV5NbWm6NbGxC1DSzMYyW1mAMgNm",
  "key13": "BMouRzsaNMttE8c2fXgT3RKUWW9irP1NQYLMywqmmV4Bv5fR3TxmbH2VrXtTGYA54VkULkyMinnPeoo1VTBjzCC",
  "key14": "2FTN35V3Q9J2b7APUdHew41eJkt8hcpgAnEcWm5bF9Fvwq7WdgC8SsgiBXyhJr33SxpYS93jkQHPndhzwk8xb5VX",
  "key15": "CV4BRLAQAopLXMZYtQ86TbeJYw8AUxTtVMNS9rgjT1EJLfKmjMqrihh1QgyALvwQLW9DFGsovhgHgxiPo6i7sEV",
  "key16": "2xqCVUgAMe75stFtHViAUsea1fGYaQ7vY4LFRY5C6yktXX2FUqUdg5N268sdNzsxnmqXb3fM3Zk6dqoiAs1mtrMm",
  "key17": "4qnz7mUNxcPsVXSHXjqSBRgNURY7XxksZudE4GHESSsgwEVRTEarPvKfHiYGXmdRRNnp48enFm58ou2X6xYnoPCY",
  "key18": "4BqB78sHkcGtXHP4CXmWkzVCLph4UjGbV4PXohKum8CccAZ83SwZ8bdYZPWxTK1SNuhV7eXXdbtU4oiMWNZVutcK",
  "key19": "6WwoGmXc4uzrhpXejHoyEXmA9ZyR4Hgnt6FDnfkdbB6dsvBFzzgjZyp2wWJEfXLDCbdiaC4fvR29GrtETLVF1g2",
  "key20": "2irUWqyNuag5sw3De75dkeMUdz2f4h3yFnGvYguj5rhex2FzasrPJhDi8Qg14BV7A6PkTwwP6QPy3LQuMFFyAErj",
  "key21": "UPMMjmcUriVsJSrowo31iToyg16E84qWq78pgwauUQAvmqTSFaBS5RW8Hqyh7WBxRqeLT8b68RCdchAEaTo9uES",
  "key22": "4ZnPa6zWpgrwQSB4XfrVeT6nzTR8MPiYfcxVSecx1Ze7yR5UvDQjR68mXPeoAPNotNS29N3TEq47g9e8v2mkVVdR",
  "key23": "SP7bUXzDn1TS3mk6MVZ2F9DB9WLHCjja1K3jtbCW5y6Gi8rCD14ot7gbnS2bohyHmVy5Z3VgVQ5GnJz2tFXRa8q",
  "key24": "ZkRsCbpkdMaLNwWmDMEBAToU2AveBsSrg24ofd2xGuPVJoPWhvm5gJAnURQ6jrgNbiPPpnYspA3iKwaeroUDZit",
  "key25": "2r1ZB5FGHZ3YMriFNA58QeJCWP7VzZwCGXH6zfwVytHviKwcuLza7noUuUe3HPSS9bhng6XxD4ofdFLmJZvaopcL",
  "key26": "CDj1UaQjsoeygm7ZNaiN6Gy2nKauCg9K7D7dfshs1C16BCuU65gfQKwGxeURKd4dQR6AAiUKBNjWAt8CqZVEdun",
  "key27": "5zD6eSYg9hUHH6uFRkHBFrkyQWJrwPqVvAzy7TYH2fwwkLVndFijkXSBYiLbx1uaoj8QtYbF4hXb7Fji3YQEp42A",
  "key28": "kdVFmQJPx1kYTN7PHY9m4mNk3i3bmeBDnWegPwVD3xN9BShZAScPwLVd6P6zUAh1LMF9Nb5hitfpeuZeJaY86KQ",
  "key29": "2g3KGjqDHHGV6YcxVyLJ9JyEQU7r6pQVCxg3E8qNk9THoQQEL4qk1horvRJPR2EeBnkSbErGKHRBGVpH9kTqN9Sk",
  "key30": "2QNZ48aJrU2jyTVbpipw5BbcGEdz5jxdrjzCsjzZ2rx738uqnkBGrNDty6o56uhczbJJc3DW8oxT5TSBQJeTorxd",
  "key31": "UFML7jdvwtEtHTcL9P8UYVoSPkSFq1vbJG1XRuk1rpSGzZuK9yZSELWzZ8LDBYAPJnP2GiRPCmqZ4XZPsTiDVjq",
  "key32": "4PwWV83DhtUn2uckz75zpG4s5EvEZehj5U8LmWTJyLNysHzN6FivCvS2iBsesvXwe8dc6a6hRdHiGn4sLMAfombn",
  "key33": "zSthe2R2LETpitE77BW3hGWAVRPkfuqUpa8N7Aw7QYx78niG9kbJaAjgJXcSK8HvfuhqQYgfhvXCdPSJztra7zA",
  "key34": "5qSX3PaXCVrcUo1ZzoKseCnN9R9mDvXDrnE9qBLrEQjLeAu4GkF822dSeftGMfpZYR1amA7BWCBkHEYfRqz3UoUN",
  "key35": "4d82wxpfTcnz5MZfwpNrA72ME3REWEoSoQDorUwpaYcyMmG7HHJpMyGUcvhXopBJMza79PiUtQKyNmU3nN95aAyk",
  "key36": "3WKr6adcvNPKp4uFLv5kCY2CHxNFZoXqhnoHCsh3VvmriaLn4x9Rv67KP1dqiTpAMjiFK55ZbMUbQ94AzTLXAk7",
  "key37": "2x1KMxdTYH2CprocF3kwVxhVKBHy8maPEj7wJNHzVguFEGobjNwSpEYFPXyeWcxXgQpxgD7mUSprF3imLCn461s8",
  "key38": "39f644oSkp2WQyXwqsuYskVtXUiwZzx1VTWVeSt8NDzwroCt6LKGoiyuFEGEVWX9wbQ46fAJcYiD78Qo5e2cCqzz",
  "key39": "mnQUiyQX1bELjT5y8PrueVbjbDwkfAq4UiZuVRRxySj7tGbFmjNSjMHBjLLnFApVpy24pV6BXohrmnxzMg3ncJf",
  "key40": "2uRGrWsMFXwuA2idvWDDWEhMR3mvDRcAWa3DAxPqhhcxo9NxGCtnDRzvhFVdHRxJb81wtiPBEE4CiDNZ76kABpdv",
  "key41": "5NqUq8BhyoMM87NWALS7fckJ9nMd6XDeDxvKPVc4iUtBgEbKfmVvc1GWagKoCcQLS92Pcp6jnUoc86FZNBu5VCdR",
  "key42": "5VzXYPYnY5rG5sVz1aqwCZM9PZmvbugCsqwj8CEiLqGTeQgdiUok1muqBdAbL1hRR3X9Xv69DMZrAd9Sw7T9sc4b",
  "key43": "25P4LBRbuTLcmuDTAxwUW37ZbtRJbmoQULaEVkSbigLEh5a2vd9hzE1ngmjYUfuHcoJcrABuhrJxxvCe3RUcLePT",
  "key44": "3LRMMcN9XtMtWeX13AvNhTAiV8nnjhA2LGR34geL8eHv8HJbYAafitzxkYX1Z8KF3QoSKcCmQuXRcYHVndoCZFqh",
  "key45": "4xLXARkvujcdZrJMF4QGe9q3vP9sv8n4AgeBfNV3WzS2KLmKNtd6n8rWnB5AdbjSu1DQ39nGNPg8tLQ8e8NWEAde"
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
