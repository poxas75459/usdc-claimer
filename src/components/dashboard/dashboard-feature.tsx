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
    "4WRdx8JAATm6P7E93yqZYRpWVqAVmfzVayJQP9xzXQT2R4bpqC7Eco7h9JToLHSDZskvyaX6dAwMwo4EGUh48y7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kuFkrGZmK1wKZnJU4BG9uQt1i4YMa5zg7WRxX6ZwovZGAZV1fuwryNbA2mvz8oYph4aB2ZrY3ryCFV6AvwDBX5E",
  "key1": "35d8Zw9qucY3SqSk3RjKa94Yf9FzqGs2Fc38X4P5xMQz8mp4WGSMENS3DN2QruJeak3fbBgqQ3AEF1haDWeU9Roy",
  "key2": "3GFE69mMYpsrNB5XFDiMDk1TmnaaG629DfRwzQR8ee1vDt5USkRVRnAseujiHYJDeA5zKBPCwbZbiir4a1kp9wRt",
  "key3": "5Trd3nYPnQkHDuDky9F4oVQJjm9SQwMtnR5o57UMPSQgRWGd9HGiJPmw5dcRBUD8Zr3BHvMyLzyGCCJMN2yXAn9M",
  "key4": "48Jyy1fRnycZ7obUDigAo9QS2xbw9SNnHCizpv8iMFrhpAnxMzMMUnkzakXH8z7ymAHm55KCXeGcUfBJihG3nGKU",
  "key5": "4Btdqpsd6rbP3gqQ6jiuFCzgCMNyzk1afzXV3r7QygEFbH6HMrAaPmsStCksY1wdyHV7Dc1fCxwbzA1moD2reUkt",
  "key6": "HhDS6uXxnM5f1R1gQVXEYEpBR6VE6K41XnwppUtNzNvU5YcBdp45oDpnffuUHGTBfDxDQ2BKvJVp4WTrQnZPpnW",
  "key7": "3pjzGw2WJDmKhTLrZsox9JpvBqo4cmLkKhr34xeYbEfANWG3fF7zngvTVP1HvN1rTseEVqhx4GvxcVtPP5GABEXi",
  "key8": "13vS8hNhBqDCeWr6G8DfyexRxEpT8F8ngdtnFZYCRDujHQe7voKHWgoh58H1rM6LwNCVFDGs6ygqwH2ap1NxmwP",
  "key9": "endWejxLxKgudCXWEV1VECscPsAnodUffFKwLM3icNdFWFntvhCSo3hmipZ2KW9RgEZvhDieGDBWBDVwqnvDUPd",
  "key10": "eZHCPx2B8dHVpgEYQBGzhXFg4eg8nWRQTYi2HEGSAdYw8tQaun57F5CdhMR5VpqScD4J9NQkd8HHkToRrZHdXQp",
  "key11": "2H4wFnCeEwRRjcWzrrkKzjiunJGtktURSLRdF5kHbYKgBkXbNZQeoUyJbXR24ao8tKccT4rwmU3oE2Qb7Ezfd332",
  "key12": "xmkXmcSDbG1xDL955vFcbodTSjg6XL1qJwqDjRHSGA8fLVQH2Qdk9tFGNn14Y67jwsoM5pLtZWNE73fGE1LshLD",
  "key13": "2wLDwMYs8j9AiBYSJVLuW2SQMaDypw1M3eXLeW9QYmQo12ZS5bvdzbWwpeRSbthprjx3aPDBaFxaxPmKscUEaYgL",
  "key14": "3wbDJMHBBWFvCmNsrBK13n69KGrruEkcwbgJHTkMNz1PC9aeerWB9MsGMLzFoFFeaez8gebpAUyRuhfAp1o8GRd4",
  "key15": "5ZuhRmWVCWyfkZ48mrDJMnfw4hCHvcc9d5KcGAkxwC6Tu7X69RWq2ek8XEB4AaR8BCLvBorkprCUzqtWDVdjuWrj",
  "key16": "5jCj4Zmksku4LoczGsnCGnnPWDZSuhJiBMErXb4RmZ1KuUycjwxp4aH199VdfSJweYJVjEiRcKuFEDGyuxq5u4jT",
  "key17": "2vqVPLBGGbPiDvZhzwpc9mzeFwyQpTjpa6Y19SLLd6eYMusPkiMcDKADnuxZ5Z8UhwJhnNFMV1e4gRp9oox5GVrE",
  "key18": "2r2K4fPseNdJboS4Thi2YU3rk3mL3FGbhnvEA8XuXjJwPj1xBiPAqwgCZojyegTbCH7yP9D1v3W8NbGMZVbP1W5",
  "key19": "121FfjQZWvzkP1mZqgQRyQuHTrjpUonUV25N51JxB6As6ukULbNNrShFKECFnXbyghb6tTjdALRSKZfov6dZfYK4",
  "key20": "AnWAYR6UAhdgenWLvxqwRRGZEfdaVewy7HPmCusN5nJYVxdrJr3U3KNtA3coL7Em2SxGyENjt5qy2pM1Qe4RFhE",
  "key21": "3AXvzERH8dVHjV1Fin2ksPLMGBWDumFAxKrta5i8twLMLge5uTHGfZ7x7i2ifTmYAgUSbwR6R28y9aJsMvdspaYn",
  "key22": "4z7j7XuFiW7LMAgD6Hvxjx7Dw6eVh4vKf1HoH9XLPgM5UCDCSPkMapaJuxnmHBzPgyoU2LJgVU5bYiu85QejDmvE",
  "key23": "51ioqchamHF4soghaaq7nWCSUrks7JPbZmd4K4WoM52YRsVfQHcPpXqtroCHoVYLGcJGNSkpnimvHUeQAXpctv4p",
  "key24": "3Dm9wLgLDD8nrXxVjJQvtc6gMw63RYK1BfciJV6BG7e1tfJTaF3AW9t1Yu1kaddw3foqxZeY7eCraCnyAb6Pq5eh",
  "key25": "63qCQ2UcbhzmTAPacsE6DxzqH3unjEW8hXXBHSZADqtPM4p6v2hZxS8XEB75D4bwwJTbiVvShW7RaLwP2ar7YwtH",
  "key26": "54yVtwvGXs78UxQWyDmHJKJeGGdSiVrfwMdj2me9xCj2aNkHfD9P2wh3nEtM5Kn2VRf3YxZZ6Sn6cXiKpWhLZG4s",
  "key27": "2FTFubHnFUapwJ5JsHDPfv1FsCVyUhB9Ru4Z85qW9zFBi5CbgAtQ5xWtzJQfLutandVyQTnCDCcA6FXsLB4Av6BV",
  "key28": "M2nEkKM1ytpz7J2SFroQRjSqUVMj7QD3MTmRR6HgnCADtfTrWzmJ9B6W7jCaMUHwkrryq5p5zQySeRVJL7CuDo8",
  "key29": "2cLRwiTksdDzmKz4JQyhwBiNPSPqqwt3wsoN6MysB1T8dstsErSgB8L6KW9Jd2E9UwBroac17GhZQwBeJ6AURrkr",
  "key30": "4Hy8ERLcF9aNjDVUGeM9k5X4FRrfKBHv5c8pwnhhHhW2f9e7brP6bKjygS8A6TUuAKFryw5S4y3P2wZpt9YiXyfS",
  "key31": "2Xi47oy9jbgrj1ALwnBV8b4XUxwk9DGGKb3U5esZvEDWoy7aNffhurGv6fRXkVjG22z7bjuNbR5rFwq1zPNgy56d",
  "key32": "Q81HRqUrjvFUG75RVNojmiuUC5smRqPJzPkfmgngW3wnUuzMkYNCfpUJ9aLjLfUcUMgEzubAPARSJKauRWo7Yxi",
  "key33": "3MQpxxocfeRv3awTC4T5sQa49mufR2vJuUMujhKGZPaWyS95frnQk8YdZoHtdrePEP5Nc3WyTgD3Fec81c5vxKHU",
  "key34": "33bmJG7dQdyojTibwxLNehJCns1x2mTEJP7bMQc2bpFfj4Q16DzUkoW8RR6eHuEohZ8FT6rsUMxd67FXL29gTcuZ",
  "key35": "EVPhCe7CuzPu41c8utoftFpjEGrszWzw1tYRuhobrbZ4Fg7m1dMobisEW4Whx5hVbRpaG1my4CTxhrui1kM68dr",
  "key36": "3niarGj9evGRQuTR3tAjkiBZSUbvpaxSa4d3t3UovhXPNPjreEG5SVeTvdxyP2RWxW2v4niDVmSsApvSMqrB1cGb",
  "key37": "4uYUXqgMXiVaMgETpr6es6juYGHRm71oyMctXkBDHHpTDkao7znN5pj5jwQUzkLix3JL2aeqjQ9TQqcnE7i7FTBt",
  "key38": "3BfhVpAY5NrnsNWZdFTV9y5KhAH5PdvhzmCcHmw8nWX2byGmRKwwV2yqqXJFpZk6ZXVmKyUJpFncAb9hfy5s1GMh",
  "key39": "G1Py2EoCcKmum3Xsd9WmyY4ng9ZRbaQ7Xac4GfjiEstaPrXdTyoWRGSvFhWhcWjgHp2bZ1JUJm7STBU2tZqHTnY",
  "key40": "ThD56vdFhdfAUgCP8sHNLf6gUWH9YerGJJZ6nNJKosbEdB9WYqQfCViAMuTzB9WAsM2tMbT3u2hAT2z5d79kvJe",
  "key41": "4SkFuJrE516Jfb9g45Bjz5DVfH4JVkyWEiGCfdcSNifGuem8wVUVAkL4GJBFTjkmSYf3v9hXwyrSjFSmA8pCPfr4",
  "key42": "382zuPHP3SMv1NKyUGyXXoJuSiXo28S8pnt3B8rjBs4NHBWLxx2o55Uz96JqVi7yNWCSLgB3fDMxLQkcCwg1wMSo",
  "key43": "4xtjTUEjAM3GgXEB5tWK7mmJ8uGKcaqATG55PTup2YxwLBHGrufVvU2muQHvUNGAa75eK1auj73CpoWSbPny3jBA",
  "key44": "25wCxktREJHGaFVcHMGkKfbKdxkpvPXJHENxfQgySSH2ka3aj3gmDVtBoCQg3ijB178aAoztBsfaTFTS5JdiFENN",
  "key45": "3PJx35QENsyQnCdJTAtNEL4ZVCL6TSfuz3dxGysDb8Tr2kZ1mWGYZ23C45ZUMVpwsh3oEpkqQH92yoPeFAdHVoXL",
  "key46": "3W7yXL5nZNtcUX6Df4wPQSZ7B94bkZtqWquTDaLiPGJ8y7cVczjYJq2ybUofFYwW9CWPopznKB33g7mRLvWQHKUf",
  "key47": "5XwiUPHk8CjsAegEMV3QkR7V88qisUnB6equw5EULw5nAnmQEVMDkymyc2dfVQmZLpM5BSn5Q9YJ5LjLuFRXUKRB"
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
