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
    "5Q2W3sypD7nQ6sNa7dboHVRSKdEbMYkG9BFeZnSMUmSsroy8hkDDpsHumm1SMgTFJDJngaYTX1F3XmTusEv76uFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52xDHJp55HYe69sBRVPB8Uw3tu5skUxtrtnY3zkoeyfu8CqsZoMQzXHjeLJDxpfix9wQJYvVktvzgcH1KBGE3Jc5",
  "key1": "4KChP26jYgDFwQPhyeTK3mxFaDvPnA3T2AwE3BzwYZj5oyKTaTtypzhR44LGis4kqEC6CJ46b3i9e5Q1u9CW4zb9",
  "key2": "ZVSLWLhFdgU6dVvqQpt8VrVaiB6NvFCZSgivNdjb15vLRC5fpcfdXwfzF2opGVwYXUCBGHgCiXhGvJmJqVTW2KT",
  "key3": "5TYCQmifBcZqiNahPvBQpkDrs54YAuzZdFwu7e5nuStc4CttkDB7dZxKjyhARERpaPpwBuCPUye5aLFzX1n2tg1a",
  "key4": "5oYnVXzZAbZ9VkyTWbXKoLkrUGesW6nR1WCkDpUEnmMKERpRKxqsCHRMbbnvSP85YF4mK9vNfpL5Tit1RbVbT47n",
  "key5": "5QyzZWrfVyDjpjXCvw2H9bCNHPcEeNNmTu1RBsTcCLMf2QFh7auSL9hAq8wgXJ2uxqgBJ65jdotwo8Cds4mFx5Ha",
  "key6": "5Hi7sTzbVJxCCS6cHKHXvPxRqbKivYTBvqBjHTTp84VFgqXiPp7beJVDXwQZJdKUM3pQEUGmFqn3yWJScHV4nyzh",
  "key7": "4SRgy5rD1HmPwZ5aX2KEH83htBv2PVpuHNqWKy7hUeq9UXgqnJjh4brkisuA8HbywQHkWRkfG9DDBZgWdK5pcHfx",
  "key8": "n22oU1EDFSNAfRw3pYAyh2q3UHMVXWKBwtKeRYFqwvyA8JSRYhuGem2CyiGAE96iPqpWoSAdSic2KEaxJHGgaRa",
  "key9": "3QXuWzGTexSuX7A8MJcLdHJp9HNcumhCCvkLoen4tkF6122uc3TYgmyPc178mbs3Hq8fzpQbuJsQEdE9FcAtdjSq",
  "key10": "57Y7wLrnNHD3H6PFHmFFhRh6seWYZ5srga7nZbrhSL2vFBkosxpUAVa92zfDAsyCGz71kWmt5rNDTpLwo9TyJetE",
  "key11": "25493n2Tbc2f5AbZreF5eKNDfDYqg6umsRw6yjNC1ohCwTcqWhyjfNnGofJqbcqyo8FYLsokC37fe46Epjzn1cTw",
  "key12": "2yzFANo7eV5KNGHZA7zVRtCybLaWwcU76sYEth1HzC9E1pc2eN9bBPnctmw1rwpVDWnEzVt1DGJkH26PnMVQBpiC",
  "key13": "5VgCPkFvPNuu7E7mz8qPQ6Vf23DrEDQKpcH3qFiTSP4SbZuf5opoqbo9PpccXUaSAjDuAoQjVd81HZK7RwwuEXQ9",
  "key14": "57o1PMDbxvp3sGQpfYfyWeZcTTSU71cktmJR1tqWseSvNAtmqr6G2BeHeo4toFzMoNGBE9n5K4fScjgShdJZsM5g",
  "key15": "4kga78RvtcKbjBd9g7Lj3LdKCSUTPEPgDFJQguPr7R45X3aGsLjDwf8mTbW4Qxzpz1Aqnqoh78qYSTm4QWhKN36u",
  "key16": "5p3on3yukUudsjBX44Um48AZwj8WWiKBWTjMQHMM8TCHRqVJhzjDxV26fwuN39JsbyxfG7bpfABynf4TGqV4avSS",
  "key17": "5VHWcrohnTUGWtHqjLr4dfpv8pYBdGAdGpMGnb9Gur4VKTrD6H6gENVmukLrfiReW2sbazvBChEPqvU5ubAFgirW",
  "key18": "31qtvXLZdw4im3AawxP42GzYvUwZxXXA9y4LrpHMMSQdU33FZ84SJcHeGL5yJutax7f4P8DhU4SnfKn2JCnTyAg7",
  "key19": "2a24aprfWf2TgwvrcWCC3cECdtThvLiLnjGLui1eMEhShDnNGXJjS8yuwFjkuL1ReRrcXPuPyASuG8eayvvbzmLg",
  "key20": "2w6mTBzZt8Y45LFqEieWSEqXguFyysRMZF7QaNrnNtk8Sngn24vJ1PoBwDXPwKfPiZFa3ZKBMsrbyygeSp2A2FGy",
  "key21": "2uGxQ2bGSrWgp4j4AorcSpWE5z7XrpCCoRVKHdii8pUddPHJsekNkLkoc9M1sahgmx6LZS8mDMoCSK1oShBSnG2w",
  "key22": "4SSScZNavJrTbUtBF5vtppAwjkBvPyGGPyGmNknxVYhhynRZAdXf28Nkuso5S7i8kUCUx8crgAoD3G8jZP9w4VsW",
  "key23": "37q7xgH5qYB2XeSss2GySVgT2rXDXzHqra17UVRHS3mR68w5DZxZSLB9QyP9iRaePdoEp4gLw1EdnbsBnGZxA8Eo",
  "key24": "5UXJ3N75SiHoaET2DvTcvWRuNgE56YFzUEs7siCQoMqHMw3JpANZRcv41NSDsaevCcLPL6gex229YrDTpbUhTwzh",
  "key25": "4TBqHfPPm6461XfXdXs34ZVRZxARhktWVjABU8D4Qz1c5v6xHqQDKcgubpYVU9YM676nE69z8J3Uc9f5tZAa28G9",
  "key26": "4ZFFxVW53M3r3hhdC5A2KTerhU6YtyqWvateE7NTzc8vTsNvCQG2qB3Ucg1iT1yBuhqCk6Y99XrJBzDkmrvhqkdf",
  "key27": "3DmKawt3D4NYaZoY1r254G9w6ySRBCigc4g4VfRD2YkbEgTmNXFjAh1PgwWMU8spRMJyW8K7jXXrHQu22b3V7A7M",
  "key28": "4m84txPs5RvkmVBom15FaKwkLbqhkZ8i9Y6EJeAJd26NRg7FRYegVR2UjDWQLB4Y4eeZkcBqzgsnJyUMRFjBPjZT",
  "key29": "5pNP9nqmcW863dPjzcXDmegSMFy3dYBea8Zf73BxRPa2ugn7GAbKnQgZ1sfV8VWwRTux2t5jJj96gShfCPee5Ju8",
  "key30": "4evstAhKXThLPFAoaY5AmLkKf6rcbPGAhn5whn5rEocxxA93D5ngQmSeoNGKZ4TGDZa1Hvc2UEoeHEHotMGffyB1",
  "key31": "36WkVHG3DS1KdacScUw5QQSbPgesYdz4e3F3gJm59E9jCAHRWqFuNkccKPq3NVYApzHWTqeEifMtGZb2n8Q9rBRn",
  "key32": "p823yPMrZDr2honmLobxpHdFGW99U2HnUcvktTCfxQScocyjBwTyLSjUHBEV8q18QwwEwLzbqmiJfPEiizWCjZK",
  "key33": "4G6sskPF3adX83TVYY7KY2cm5GtrHcmrePXqD5UYY5V3hJ4zhPWMEyqPjRmcGAiBsivMDNceUVa2GGQTUXA5tpZX",
  "key34": "54SsBjb9u2S83aRRXRbMuz1sGZ4Y59zG5SykBh8bPHY5tsRKF6VjFscREr51JrN1DoiFDjsk2fo3voWKv1rUYu6r",
  "key35": "2vJekFzhaDh6gPT4uEb75M3Mc335iKxMhf7eppS33sNbFnLt4w9G7w1wxt1afNAoWjFXfuhHJcLdT272D6jhZPRp",
  "key36": "4N2KjTy91xqKLy6Wzqqct4Xg1UTceowquP9GxuCBhyoUT3fDhexDb3V4JDGXCjhniuaynBBxhLwTmhM5ZxgQzt52",
  "key37": "3d4NHgjRsF1sye6GmTb5461Svi182kLfJqAUvpTqsoXLY77aCUNYPpyFScMg7WbwRLWswNvLQCpyJqypRYuTQXij",
  "key38": "4hq5qF6wmzb7xz7xvEMam6tghEfqh3KTtLbd4KoNvdRixizyEKhV5SoAntPLa3RjJjFf8PpqpKS8HFK6qVGjSX2P",
  "key39": "2DnE2VrD9tym1fyGDjaQY2HQNAjZjEkryhsraGNi4MVLGyrqZJVbFaW1uoXiiPUi9shyRagMbpvzXWbCYoDqTA4c",
  "key40": "5PWKN7ncqw3kgFCWFCpv6B6hbNgwXCnaTgAyEQnyDjZ5eDSsr3HYcdZRvW6gxK6Xzfmw3UtutoZA2eaKNiJQnoKp",
  "key41": "mbJPQhbwVh85PHx2EdB55fxMiuJdVgRzhyAoVghprpYLcqiUdwFmtxGPaVC6WryyyQ9L5kYoEiuGJpvwF6zjsqq",
  "key42": "5LU1kUaGT1gfrbqTHByUiuf6u3Y3uaBLQkevajPVy1v251gM4m1zsfQgpW8gVcDHbq8YDxuzvWiu4KAQXRnqVu54",
  "key43": "62RC6HXyVsTCv8PYbnfztUDDc7XHi2y3ebtC9aT8GaGrMU9f7Jyt8HCHpd5UJxH1tX8VpifLpjEZ52i7ZbgDyv7h",
  "key44": "3SyQbVHceesHsuVV1yjh2zXimA77FC4vpXarC42ybbDzRBKfL1SmL7R7GA9yyqeUN4SZmSc3PyE1EgX3pocdqXi1",
  "key45": "3aoBaQAFgt4fthEFxg3PHkaCb16AYqNeZZLd75wYJcDypB9tPu7w3ZFBcFBRGgTmDNWLa8xQhfic6C7Kna8PFjJn",
  "key46": "WnxVBTqtowUW15svqyuHioVXb9NW53xPStg7pXuL2oKYQyU6iAvT7kjjCjKaPWMDS8CQ1x4gWSw9aUwaQryVxVn",
  "key47": "5Edmi4W7eqc8LSRDNHdTG2EUpoX7xaQP8L5A8n9qNemkEXBJw788SovwLPCCpqqGE163hXKsoKhxzyWKPRQDmsRP"
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
