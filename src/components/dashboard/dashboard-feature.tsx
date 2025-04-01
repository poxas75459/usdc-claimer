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
    "3MSrmcxv4fY7tx2xRYuYVigCwbQCTJcxXdtkGJWEhVzuexKEJiGZRqP2P2b86WDHexKPLvHQhtt2ruoyVy1jQ3DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htsZ9K1X8AR3SJjqxmpznByNjtuzwHMCCSsiR8zfTUddCE9uNmMJDCYMN6iJD6WU5xGYoktrpamnriDY5P9YYQL",
  "key1": "2tpcynBWQzVE8EgSBqpiLZ9njcbzGnHSJyu65V9GDY9NE7hCfdJp9phHZEKKLCHnw9ggmGrCTkirUHbxWMdLngmK",
  "key2": "2F1Vht5wXKxADgRaauY2GQ6skJdnYfudW7jGADKSsFpS77HxgHPuxq8cgR2PRdTuiWiZWfJA47Wwnt5eKkkPKQpk",
  "key3": "2YAZMHB1QAi93jZRwa8hxNQL9N7woivbKEDiK4d5ZpRDdevHsrs5Vt42jPXG7W8VPBbi4zTpv8jjhov64WBfrwt3",
  "key4": "oLvn8TBKPaFN4idGYWMn8NhbxRm4sTqkVc21cGTrUTBzEDjAbRMDqaorEpQYsPdxiibxZBVezV7QS1KUFXySKhW",
  "key5": "5XrD2MfyEmmuxPuN2hT3JREmrG7Yv8ZbXVodUkks87Aj7qt9QFAa4dknfyE3VuB8MD8miZCALAsBJQXzjhrhvY83",
  "key6": "4g4bLhRaB349gEED8dhGAVyzLik3Ak4qDwD4fKkVRCiF78v4V54u4nkXgTiSoXRjJdd86ZrpC16CRq9WXG95m8Pq",
  "key7": "64sRYytu6SBQWR3FrUhKZ2NQuaSkbgPepkR6gKvx4L96v4PzAu97Ac95Yp5j6BxTHtdAdBThJpiimGA22pWZt6Es",
  "key8": "4C7q9mET4A57CKnkC2QEv7LaPxFqhQjaTUxK7FrijKNzEtx7LSpPv6kV2u52VfSWjWT4tCDXEK1sLQWW2WzTgK3M",
  "key9": "4tVszKu2vGasQE6YJsW1T5SWWBWSg5BGe6npzdEk43McHCEeH1GsVnuFphJqBYez3XpkQX5hUouZhMXAN6vZeWD8",
  "key10": "5RwAc6bGDrCNcmzsZoWvohoHUizg4zRTCaXGmQnPMRXXxGuNbtQvciVQpey4RTBDTkLMLyd4YS8N8aLUJjKW1gGU",
  "key11": "5ow8hpy846GxhF9KbEn1CdWecYKS95jtLcmQrynzS2mLgLygwcWMjfbffJJ1VjcVdfNLm4wyNvKZvsCo4LySeiw",
  "key12": "3F3fonnuJnw4TQBa8A1NvK8koW122hMeLaVD3WphRmALMsP7b6t2EPS1iVfgfwfEAatjcFuytkqybh8xCDgxmmgy",
  "key13": "3SVkPhxFk3oTysAykprN8Z8GAQRk1MMTkN4TvDbsu75GRxDHtdH12nYLdK4GQtSGS5SbyCVmpK4ctnVLyQ5Ro8zE",
  "key14": "25D6X3J4DQJETGNNGhZnni5oiyDJEiV6E2qzigUqbQzuRPcimieeuMaKAq2RXDQZAMWzNHFr8vagRjXseqiDyWkG",
  "key15": "9qAcdtHvKZ5cLRuAGjiMAxQvrNmoQTDj9ssdMV7NBAXQTds2ecHKug1PfU6oAGLMzpNmNZswsSpfiGCnEKR4rsS",
  "key16": "QetK62anQt2ozsBLjB1mHiTr4dCL3Wi9BvdvC1BqxWHdV81SjB2DiabTJbp4rQPuN4Bkw93MnV61cAbGb47iTgQ",
  "key17": "3CzyeGkZ6NZLU2MdqEE7f7DECobShNDRs9rc49JXG2BjNwJc5CXaQmb1MdyrpVueasn7GL3wFL7pWR8UkAn4sLmu",
  "key18": "3cNLRLskz7XaZvxmcUnqZkULnX85UX3Wj5x4FCSg2kkstWWQpi5oevEW2zS7de7aNwhhxYKVVmRL2nxVwdpQoF8L",
  "key19": "5z8uNwhEHp7s15bEYzv1n5RSUyhxdNiJfxFXTrAaPQRLbzXF1Qi4h7Zdj36tu7kvWA9fURqrYbu2H9VWNAtKPp25",
  "key20": "3ugNQt31QyWMKY6X2VXZBBkzoU8xE2Nh6JESdoXCSySATy1LUKVKSgAE7XMdYU61278G35uhtH7Z4edD3Jy5mNNK",
  "key21": "52mAnHYHefVs44UbbbWYhzvuvSCXHrEvvxNQQmdJ711tBtzyDrzM5gAtCBY9YiDPg3H6dzjxaseX72m92hdD5hwR",
  "key22": "3zTv3ScU7iAz6tJAetEvrhXm5zFqs2LabDBKmokmU4VmK66UKXMT8r9P8haqdC7mU6xCsq9qzgs6K9xWhoKf95RB",
  "key23": "3Nrypm8Z1XkRWkQNEwFHA3eKfiYj2F22VCySTcYoQt32rhK4GaioU3rxGkAgLZBiB6djxcFhGLdaKjWgRKXZchM7",
  "key24": "15EFzafa6HCmtJSP6piZFCq13u73E4EcvaXz7hi5GxuRgwfjSdmcU79r5q6oaAVazbBsfELhzpFmf7UNovJywBQ",
  "key25": "5eMuPomfSMrTcEwEPvGXFb8k4cU6qX7qx7uHGi2t6dtX9FtT9vcZS2azmWE81Rd4CidVu8H6Z6rYYhTWesVfscMT",
  "key26": "4LTezec5JaXa1t8oyZt9hsQHrRPMQgWwXA9MJQ1HHtbT1aUAeaGmJzwSBEEPv9FduSt8Sz6BKGGmPBg4RWku8XCP",
  "key27": "994Yc6G2oYPcmaiKKvHsw8uqLnMgeSdHTV2JUnmg4nyVXaczWWQuXMeoSwjAqdaTECLaxuNa6PcRcvQpCSDxpaa",
  "key28": "66gb6AiMpEKfAzxqiebDsW3EQNWKiXWzrjBxMzRN5hu62APBiJBeaf4Giurexrr6qDh57sB6DfuZ9zGi8e13G4zY",
  "key29": "PPGf8jLhg1yU9DT9rNfVqj4uYcJMLPK4EzRdBBqwe63SncKJhqiEj99LeP9GWiUBU8fZkePudcXfxYeca3oYcmL"
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
