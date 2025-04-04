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
    "desJzA4VqtvipXRZtqDQwpubQMuvKdaABEoQmpM3yji5Pxu7gCrtUkUuP5zFR3fKRGyTYQ5RveduNneyPZhFr8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dDqvQWYfs6q9pb5pr6nf17tEt6zHJAbCtLe4NpVUk9p8eT4LVr2Xey3CdQdXGyWzUp53pfFrgotNV9Ny8SPtqDm",
  "key1": "KRQmZX7iPJaRLUthzXGbPHB6qMTNXKJkrsfRzxB4nPE8jKcqtqvDpWKy7sZrDMqA1hnB9gSw5jQQwwgNGVEaXDc",
  "key2": "5kkbbYFDx9twL8jY4jeU35gfxsJ3hHNFeZFNzxLY9PLtH5dz1fniyNjBiUdvTzZozQzcUKv3f26eAgnJiJpab3S3",
  "key3": "61tduN7YS7y6Xg21JBPy3KWyDfWUrgtdCQUSpWxFkoUE1AtRxQgNq9XVWZSK38oQtofA9FWXoo3woPKPfzop3bKu",
  "key4": "4uMqoR3eGuoU4FQfbTzdtjo6r1fCdt3bwmyfXWEPdW935SUg6pjbMPHtJh3obK18w4vCMrVozRDpPskhFFgbif86",
  "key5": "2JxXuoLNogqHVkqtseSMVdoEyjJyfRJQQyBhrMGvoDVFb895N38ETFqVVs7qL4kEFjuydfVwjY7LB5TJ7EnUuB3x",
  "key6": "2yj4UaU4WyYfQHrrvCjK4VViyk9xdcVuUsBMbUAN62r6T5A6x9H655z26Gb38LAyiRZ9dajYx47Nsip5kbeiMY2u",
  "key7": "2tTR3NRH2H33wUwWuwjLqCHxFo7rmiELVzEuudJrDRTQs3Qbwt35QdjrogHPiVHGQaLxnPReQk4DSCzvobDyUHJC",
  "key8": "HWfWNi4V5UQZFqXKKd34rxVHK4Yru6PkcWZvJY8wbaaHbeVaihCxuqPfP8Te6aPGxvn8K3YWrVzsZuNQsP9SLc7",
  "key9": "61ErhP5QhEa3JH9dsXQXH2d8HrjHT7Q3Ma7678nSzo3izAKtkACqhs7AkRfRjJXUhqkyTh6jqv86LkSwVdEPfifg",
  "key10": "47gis61s8aHe18kz9ayxT3zHPy7HZa9zi27MWNMhzk4dqcicijXD9CcsbHciTexxCAWh43twhvMNznbFwfjEw2tP",
  "key11": "29Tz4RWbrLpaprsu7iBCjnLp2FfVAuzjfnx9qEx63JVcqXpSjicN4SCLHsdtnEUTKWpVivSndNodd8cQnVoANZpB",
  "key12": "2Uq6EGJGDocQxTihhj72gdpVTTdwpufmLG51uqFMTtssGRYesuSMGBUdrEA6CM348yCRTwUs3r5GKxdGCVRtoyvh",
  "key13": "Cq5ZskJY2i3aKMH5szwTVo14Nm6a3YxdbSH1RdbC4igzxDKTfJs9E4Js3aXXHbQAmq1hHFzLvspGYyRyW5vinAW",
  "key14": "4SGM1qJsY4VxwwZDBRGeGcH61xkCg4SS72q5o4MUj6Ysac8nNbyzYWmTNEfkgt3kMxUt25aVS6LHCzLEg3z5zKuW",
  "key15": "3Vy7UddQ1YgZoi1W6R1GmiVKMJkiTU1Ygt7orQwTPTpT488YzhLpboHXSUL7ahQPEk28ZkAu1E14UL1wiK6pKta2",
  "key16": "riBSx9phfrN53zx9mR5Qvp3A3Wkv4KMjCE7dAkTuiZ7n8PnJx7BS4pcwSwHXuS4ePPtcEXzRqDfV7qFHeCdvAuG",
  "key17": "4Are2iXqUB9d8xWuddUexpJ4ahHR9g6cyHymiPiyZCvbEursmhPHt2CayAZqd5ESTewpiCu7vPRJ2rd3A2Ptw2yT",
  "key18": "532iqF2T9xoacYEA56K8pZkBCpbX3QkaDnNNQPbyDMfMwHvWvFhmJqqBJkTejTYbU1JvPYidn2TD1bALHGuNFAGF",
  "key19": "3L8qr9vU6tbhZCfribeoTuPvfSai2nCpAiz1F9xBqLN2j3QvguPhGxYVYUKh5csNuaWx8sSgnrD4qMrvgsHftPTC",
  "key20": "35s7HVXFgmnZ4T2yjZTrU8yfDDeQd6a7jqVNe9oXs4LuJi5UjSebkQxpKNYF9ANcNV8jQtw8EpM66tGsmC1uHWQS",
  "key21": "3ogZBdPTChNtH6Y1a43qhz3L3a22daQw7VJ9F6pKph5NdGF12uwgqW12S9aBuRtRt5SXTnFigiLsbzZgtCT72wWR",
  "key22": "28zB2DV4XNtQaqoDPazQTfzYNz32ooCngmBdECZfRXfLsfZ1jRqLr7rHD8TqfNgTCDWQVSoF6EBkWLwYH8kzex4g",
  "key23": "yWM48NMZyHkHqe1VLrFso7rdUhs5HpE9N7VFT6wsX89ZKnbxiSSmezjtsd2FfuszE7f3GsKCGUTuH1jxZWx96h7",
  "key24": "29HfneV7qNcuCakV6NH9RUMkPDoVKTUaLkZKpeWcFAdwj3qQaEYEiE8DjVdAjSTBphQXwem5oPtSZLH4vcgiYX1F",
  "key25": "5Y7FtVEPMoocmcua69Vrh1e3vB4LK4U3nuqo3GSdNTSyUz3M1URmpWTZvbbe8Fw4NHJ6JfwcwDZ6t1vPrkApkapm",
  "key26": "3g5spH5hnAAxSaWwaFtCTYdbkj8eW3SzwE5DQEVLp1ByvZj1AYyqVDDimY5U7MyZ3XYvAnKsnpwTJKqAJHWyAG9Y",
  "key27": "4TiXGEJpJkGVohT5imVoTLkXws9kM1ov7Q2sFeeCQvkHhYAyY5uPcoinBapf4KV9FbxAog9MXqMtP3uezcXNFKCJ",
  "key28": "k5sxnLYq9he7SGmV9by1fhctwoDk8iawTaPLUza1FmYuyyhLTkvTJ6CG11gSoxrrMzaE5hfbAGJ3h2DxG38LbSA",
  "key29": "2bmshzsV4pmPFYPGgFzofCCPRCZkYvM2usYQ12J7g5SZ7DZQNuhkovrSdCwwuUMQ4N5CGuZZ1xznfXDbEm4X81pc",
  "key30": "2Hikcv6EsjssfDFBJQfhnwjyL1Byu7tVBRq4pneYXH789rv3W8Q24QwJ9UXD8f1s6wF17SYSGgmYCn72Pwg2c1b1",
  "key31": "2hqbt6i3mjdyvnnpRVqVTxUWJUuXJqDED81Q9UiKva4yCwm1xymzwF1F4C1zkoLJABhUkbsJm3fJZkQk3u9T9coK",
  "key32": "4522223TpZsdSLZMGvCdjyeWYUKJ4eEVoqjLve8gR8wrpu6dmkwQWgbbiBwG558AdjkNiwDREyu6Byo4xAvoQ8Le",
  "key33": "5TBSfE2iEubQqMywBwzQpaGiRdWnFitKu1FtU7wgPvYxHG6Uynr4PXLEFS3uPxhS75WKhA2EFSTYs9XeV2ZHgYGR",
  "key34": "3YCtxozfbiXrBNsst4Vo2tKcvzDixWt2M5nsTPXMizyvmyvCk4a9bh8VPscNAxsyGyxn4NrKCwgUTTTFb1r3Chzr",
  "key35": "4GV4ahzpEWQyCiDByqw1vAz2CpHaHGdTsdz2NozjeymPm9P4ZL3DxMXbcuSdvTSzVPUG7JCXumsiKKNpD72gEN39",
  "key36": "5RCbd4svYNKnvinGq2LgzRmwZbq9Spk8WzvR2p93eLx9axF3djHYX3JDPHKuTUKfPRHkvbFuUG4TSRvj4gfc3dNH",
  "key37": "2cpYL7yvsGJLhKY9C6iFBqgE5CMk8sK1Noyj7wiq4d19XAHVRn8oDW7ZrH1fzoC4TrJ8kGkCC5NRKaYrcWwM5LK6",
  "key38": "V93wEfyD7P8JoAnqVetpYHpu2N12fdGzkq67HU8NdzA7RrhE7HwqVbRDRQokPwn5wovJYZ3srsrqpPeV9n2WxX3",
  "key39": "2W9BMQBZC2ZXGKBy6VUaV9bSrnR8yS9rqqZFPDPn3XyzTTz1AhtiqyDFrPqqW4bBWgs1KtiF4qQj9HTtwa4hm65c",
  "key40": "3ULd7tvXtYCNjA26S3rPMbPRQAuhq2GnS2nfGmS2i6NG1vajbniDaPmf3kCLdLwm4CUyhUj2ytVcy2yuTC1RNwjC",
  "key41": "PPKTvNpLS4Wz2terRKvG3mzmMu387d3WN148h3tWTXyD32EbPRam9rqVLSBz7Et9FLQaLxKoYBYrRV8P3arVG5H",
  "key42": "56mc6c2NSVSYjKb2GabUAe57NT2ezLa5iJTELPnWEYS8ocFE9EUYfkXdeLQTc9tZ5YY32nH1qdaYanyRiDodyiop"
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
