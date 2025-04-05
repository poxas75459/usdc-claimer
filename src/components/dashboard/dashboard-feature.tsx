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
    "qkBeqkhfucwpQ9h4kxVni2mxWHXHYNTyoXVHAdw47bDJNnCXxrFRdgPoGybJ2P9epzpNiL39PTKTJEnoBjixzca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TGnAVeygXd7jcVh23MgHr4NH6j3PRUaYbV3kq7LoiCRmE4cdfoXQUAc8waKAtrGZv6qgZ5oxi5vZQq439q8M7py",
  "key1": "4CoH9GFskz6nuXG977DYkKiFZcdV7kSDeyYXQCiDeYztWLa6tDA9hWNJP1jAb8YhHTYWmtM8XgRDYGmD9ugFnyQZ",
  "key2": "48BqURsjPLmWzXvfS3AQPgejenB5xVyXdWGu8SSFBwQVzp891HCNM32Zffq4C4RcFdsJXripxGNqx7aJg7CBS2Yk",
  "key3": "5hwr8xWumQQRJZcRNg6JCqyXGajFWU18JfbxJLHKYNqaUM47ryTep2oWGjCDjDAWYmvZsBJuw984oFUbTnMPtX7F",
  "key4": "3sELVMozsetFGZbqhTK2sPX8q6BUYtdMoRPLueLtKJynCeF7JcUmnCoFG9ncdL4LPkDG2aQNRurLKKPy398vNBPX",
  "key5": "4Nn6cDhhPf8ZDpdAEz5Sx43qAt9aonxcbP3SZHVTPwU5nTyzXAT9AkqUNuEt3AB1oCfwGBLY5di1dnuS53vhQBu5",
  "key6": "5v6axntWJeTp5KvnDgfYr6L6BA51jK5S8Vso6bBZCEhnCG4pJBFZ8FbQ73mvqJQ1Ai2Mtaz4NuPMyuPrVqW8cWHT",
  "key7": "549zW8XQQ7kn5ZSp5YHvnH9Cnh4Hjq8mTgDtjQKCTd95tPMfamxh21fyi2hLgdVNDa43pRapsPSutSUtZLSApLZj",
  "key8": "64oRMZy8rwhBJBsuXEVMpp9bJgSQiiFBRiUFKGhTEfCprJzra7oQp3L1u4CoYhgHWYqVFrEqR4HRssHN6QfKJ1A5",
  "key9": "2HZb8jGpRZ3YKEqDcnWPv8GAvyoRH5ZLqghnVicRP3MPNEzZnQX1CooJcLnwxgAG1sg7Qp5AQysiDCEuH7yAr3nj",
  "key10": "5295N7fRaHUGwkU5yECDe3Q329Ew1kDRmYMZLHztJ4XJuUrrmXgh8JWAS1sRGQMFUYPKDic3kM4QnW3Bggna9XfE",
  "key11": "4MWuaRKeANJpuMnYbzKzj6dPuaEhbKLyEZpDV9xFCc3Dpkph4GuMsqHvdHpUbVoBbpbsdwGayTqZrV8nkULk313",
  "key12": "4jiUvYY1v9U5imwchiVAsJvy8XHMb2DSjCUjYtx7QseVkWUnQV1icq2maET3aGrzRrPbr5z7rj88GK7bmtQSxz5F",
  "key13": "ZwmcdZLd2NmnURzCcuSdcZiBqGfBZVz3aw7VtaCVjd5Sw2cm4JYMCMiWFBoBnvxZnLZus31YpFRUKsEiRzdVrbn",
  "key14": "3kkLnFu6PVArt34zuCJXBBhMEH7uYaqm7CkrGwZ9fxLhWqdTs74Gd4qPXHWbgkReBPXZPn6jo3G3jGpDE6FfmDe4",
  "key15": "21zx6w56zBBrnSbGTFwUYxyGukDdyqnCs9r4my83QwaCLoLwaoDiP9isA9M1bv8iSi9VV8UWFjooMjccPLcKQqsj",
  "key16": "48aAf7Kk1uU6YWE3vrZD6pRaZW8YatfT5mNVwMR6tPMkRzWNFMG9ZygR5ouNUje3VJKytoSaJKTwXTwYT1KnM2yU",
  "key17": "2VCUG1D6bZrxDbxF9Kshm16vRrSk1xy4DgsGk9dW7GmyWocJGR39xmFZvPqyh96wU4EimRew3N21d1c32HyT1nnX",
  "key18": "4J2t5pgWKURuznoivd2bS6yVgQUUfEZg6fiwGoY3PFLioGdb5rhK9mM6Wo4xW3LBHKEdseFicHw5giYqF32xa1v7",
  "key19": "qdvCwKenBmHXrfS2Bx7T5YoPNHEt2fTryg3n7oiyi45b4BrFRXpmpcDxnpaBJJcTfMz28go1BDcUwVFgzKtxTLC",
  "key20": "5zNrebX3pYtRkZSbpim8AeNeU3HNqv7RUmcFJatqYV3P6E9fRjVDSdDJspxkGe4cvr4wHLM3zRBKuM9rP5MeuCB7",
  "key21": "4NPS1u27jGA4F4qhYE4uSELpsU8QLTECiraWw6Lo72hBAAHd4nWwYJxzm1SJ3KchR8cdazr8hnxYZrfRA1U5uyaZ",
  "key22": "3y5D2E8BKy9weVHvtcoMbxW5MEREjbfeheLo3g2yJVX6exhd7fV6FSsiJzUcnQYgSubPbLWvfhcs3nLhg3ZghjzA",
  "key23": "2tgg8o13ZCUMrb5X35BdwaVvChtJ526dUVEcTwtF5XxzwdmkcGCrwx1XEDsSHtvVeToJzfg3xPFGEShhYE63GP3K",
  "key24": "sWCmsg33DdTqdPhZwAL3jM98BW8LMm4BFQUmwdKunho3ECAeEz2vSTGHSPKRd1SMqkVM4Cjckjq4FtrtB8dvZHz",
  "key25": "3eimfDVPDiNt7s68b8NosBR6NsP7kGoc9qEVVAcBQ7RUrsPC4B8A9Rg3hJxUNns45GobFVHNLGv42YE4C3Nd2f5A",
  "key26": "45ZnKRbrp1Wa6RGGUDzxCtcF3BmoS9ueYn52BrbAgP7xN3DoyZnMwAJ6NxtJYrd5UN3fUKZrAkLDFcAr89nMZ9XK",
  "key27": "K78HMpCehumFvV2Gmv8VhuYnApJTcdP4BEJs75etFv3xWbegda1cxSNTUvMatFGLDsaQpFHQMUDL3A5mLdg2j3n",
  "key28": "owyoRkiDPbbJZeqAa2zAcsLpzwJk1wE4cvAWXgyWuzgq6GCi6me19nh7zMa31M9R6gYZ3jfpKMiZ8yRhjRcqPtz",
  "key29": "2Rt7Hq3oFZMM2J9hm37fpFTefyBmr5D1UhtJWFWmgLzMGfcwcDaHmLfSMS6sSBTVMeWdfaYyUEZMAFVL9WQJ1FVH",
  "key30": "3H9EEpMu7ocdugxAYwUGGnaAci1ZhUnUsXjxJWJzimiKuCcWMkodxh9GHwLTDMaTT4YecwvZMRVjBWrnDrsum7mj",
  "key31": "3g7ENNiNwsJxo4FM728MTjMZQmzdyhuTdAQg78tXnRTkdqKCv92MJYesPE4NSYnVyJ1AotHDNR3unYPV7zcEeJfc",
  "key32": "gRShrfU6agoPbCSXCJAH6CmpWNBEKHQfnY8AY2tXoHm22YdXa2nfuiseicHwSAiFYd8wjTagswvDJtxo6dRSh43",
  "key33": "Q4jPFpTVNsErFb7F84rMkr8GKXVRoua6qh2hD3mS3tRHYhsw46U4RkAYVuDMEqLD1qz2iQ6ZmtaTU3Emn46ajeH",
  "key34": "4Ym5WBCH2RAh4YYutrvrcDXzp82B2qy1qLvd4tL6b9jxBZLPVV2ASo6aN5UVHR3nyYJc8SoYkV2hHpctQc6DgKTj",
  "key35": "3g5KZbMx9kjFxgYTVZuEHqYPqYAeb2AvvQaAzRVbwQ1H5n4rCWwtqSs4igheLcvjPwuyyFAUs1nwoTWBwePtb8ai"
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
