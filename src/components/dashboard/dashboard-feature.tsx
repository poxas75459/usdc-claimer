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
    "3xfwNjKc32zHXG48Lr2Zi6eowHifLXZfnyTmSrdqLJ4TfzaGxMGcqxDKATThPQsNp6bALvmpVL2omFoLeyyGpSQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38m1FZS7kiTrE3du1F4BZbzWWH2PgpoQ4VigvRffoj2H6bjaWJJvMPhgSMu6KNXeR5gB97EiYqF1qQ8x2ZFTc8KF",
  "key1": "5Tvn9QpjsKG1j7Lo9s9tPjDuvp1xopP4G36kGoHGYHkc7Sn6VLgvG7gA2bG7MJRdEUQ44RxscFMYLTsanE2i1ND8",
  "key2": "3kb4L2NPDgJK95XaFhyW1DRAuyCJ3bqbbw6qxg9GPwBbiw12xHAfapEa9J7VfuwznfMa2q1TzcPbrvNiZE6yF3LM",
  "key3": "2JxQ4LNAnBgAYGDsKUMqftwdC4QZMUhpAaUEFdoKUhiB4jZEpgeWQbGbTTCg8LZmVjhXzPr9avXTGKyHKJBG87Ej",
  "key4": "2w77oK38Ni2azQpn5sfhyXtwSMK87tpEVSAj7Hycm2ptkM8AP5Gp6R6GR1mYwmgFW5cB4Q6vVxUXqkMxnVP2bUgc",
  "key5": "42j2udHnXVTJ9kFav6L7xCYEUm1GCFG4yDvnH2T3BngpkD65Jf6NKSPfT8iLj9xALNr4fDoDssUsSwqdmmyuShcb",
  "key6": "5GD9rhRxEd39Sp7BSCrSUAK9z4nBy6Zp4RB8KjhPAmxCy5BBkmVzb4GNMZpgzoh9f6ah3kJKjwy43t5tVxi2XvgA",
  "key7": "3T5hZ9HetMiRLKCM6QcvKJ7TPGtZ1YSxxdXA4bW3w2HCR1SorRRstp7CDQ8GsshEXSrL2ybgm4HJ79mGxAdhzyeB",
  "key8": "5ZCr1pKNkN3zANZFtyHVoJHos8T6bBw4oFXEctGzHiEwF79bTpWtPwn6skh7BjA3FijjBepR7nmG4cnKc5FDJKbr",
  "key9": "psx1rha3rJnnPD74kJig7wRA2sABVYg3uNtWboQPutXdNeqqbp2usadjHKuhUDqxjDwHF5qPXqf3iBEMQem1bgg",
  "key10": "26RfVz6evjwe2HGjEKYcFwuKwdiHSEd7L61yeMybSDf4qpcTdbQwM1AhutnPvYoBKh1QpnABWBNnTGSwcDz5DMXo",
  "key11": "5pkU6H6CJkuTGuucaD4hwDDuXiyYR7RbLRjVRH6B7HBf3hr73a1Ex1VNEZCsCtwzeBybeiLz5B1g2ZDZkQoW1V1E",
  "key12": "2YjT9e1qipyydGY1gAGiB9wtSTCwTWJfDyPqiCyREi8khZiGKstMFBvx4LtpSiu3TVK7g3ZPkUNu4Q7UMT3Xb2Sq",
  "key13": "5mgNXiN8667P8uez8LLcU7KxVwHqUXrhqGjp1ezLFxjFeRXQuLoUHoDerHybqmnM5EchdHKozzha5EanrnNyT9pY",
  "key14": "UUVD5vpucsy2fok9yryVthpdPh1snjzPFRZjP4SK6izbSb9mYv5hfHhpauZdLWdsAQ4o3j4pkJo8qKZE7RP7WGq",
  "key15": "3qkyV8RHnSRFVSATXJGy6AtxJPHXCBHoNKMBxHZpVqcHZkfWeUGvoeL2U95o6gtpKhzzmMiaquN7LuBzCGpxjq28",
  "key16": "5rjPPtsE7fpj2PmfC697bzbHBuZ7BuPL2GqwgxVSfmgpZ1PDSa8WDMYb3NXHptH2KTP6ggbfvWFMazdWmZaJktbV",
  "key17": "4UoSNk2apM5ATofNoCFvQcoTpd1NFaG5wYUVTDog4TQQW3Kj2vvQpsy3tsMwxS2oSTngGP3a9xr6CH9rdUrZn7m6",
  "key18": "4C1ad9r53JM4bs2EfEDqVMRyPbGmcC235Tej8fajGAawLV3eoh2fNDe9CubbFPng8nacVeSTzTsnFB22MCnw2H3M",
  "key19": "2LYxy47pWPBLv3WyvRo1Yq2W4HaAVexE17R5Bd5D7c7gvQRvARshKNkUpC5RsrzX4uGbVijYzxrvDdgGHzAwfzq1",
  "key20": "3sZUtL1WXnnZaBzxqffZ6nXY9kHJyoQXigv7pXrYgh7ewDud5LSA4kn6HmGHxgNmdmDBHnPk7kjVr9XJG8zg5fYF",
  "key21": "37CteYpNEqGaNDmTMz8pnB8FqxL1teDmfP4ydu9SRZSxftjHQgYsgyK9oVJV2xNFRdXNYffPvwYPC7gKtPEH9jDR",
  "key22": "4H4wtwVZxHu7XqMxAcLre5dtUgPgy2BenJycT2R5Gsho4NGeinmmqvquY3Y51Q9mted99zBFWjqZgAiJGqLBscUD",
  "key23": "PjYi1RXbpEzXh52BKGLP2sUgao8tEmaS4pjSaQaur5xgCi7LCTKsrxnkGSK1D2BAx1WuPpirsGcZvGvVw2Xcaoh",
  "key24": "3uiK9Pn72rat4Nz5d4QqwF57PCiCGTCCZyKf4uxsvfS33CCaH2cpVLxiYFXwEpPD9rkFMfNKh6m3dXn8bdHgGZRT",
  "key25": "4RkxrxmzXE6yNBy2Awkgx2bZG3SRZcj1mDdyi3NAJoVd8i7mRnn3AHBQeHGFkvkMhwGdFMqDanVfGcA8ic1z9T5L",
  "key26": "2Q8WRSgRdWWnnJktvLkn6EahTZ12YBZUTUeWDiJykRTZBb2bDRKckp6x46jNPXJgCQnRttjv8oiJuchgY2Ut3THR",
  "key27": "5LFLHnvhwkvFgnx1fRaZtXr8LaWW4N4FbHE5tKPB4GmibNJyJ36UCSsr59eEsSs4qct91FhYiNGAUVmZuttRA5wB",
  "key28": "E2dPiy3Fx9XJE5DtZr9efnZMCFot5zVRVzkqDnf86tRPveLagHeXd4cJDfUshxWYexMRr8oeuA2gqaVbXXUeLF3",
  "key29": "3UsXNMxEPmvb6Fb9MPTkkEt7B7bPBTKeXHbAaq3jw53zopCat9rXrhc9NFkSij61GQ1Tj9eY4VyDLzzjNQHyxsUM",
  "key30": "3VMBFMxpCnzd6hk6LbdaMypmrPW46vBNph36siXxs4zGMuMj56Z3d5uk5F1ahm2UncN7y8iQrXpcMpzP5RtbQuDg",
  "key31": "5RLqRwoUTsrfcrqxkiuwPUdJFBaxFeQPq7AVKKYUd2Q1orgJmENBLLTcNvTn7uRux9rWV7oQRqVtF8q92f3xc7kA",
  "key32": "4uwF7QX4aHE6v3WEYFdrJhfgx7EzJSLUzZ9tco6ZL3urKfRFk5sptye7T4ixqUAq1LFaPqZQ2L688kAGz76yJ9Ee",
  "key33": "RW9AWpwUb9oBL1PSZyinCcsmNKWoHRPkQkgRrp15hR8ofdAvUNTcmLS7f18As3uTBwTboR6nvNMmiA4NTu6qZzD",
  "key34": "mzJUjaoMHEm4xHKwBFG2wz5q2cj1b3RMqbPcBdk9itBYEKkQtZAqfqBP5yaBQMkD64rgqG7xQZRdvucVH1Fo3o9",
  "key35": "2njdPbiLJad7Vth7tsvjecT7vjgsHGXoDVYT5Qw4KaCZ3fZ8FBWprwAfQn3Ez2sG927UMBcvfZwVdUxbxWzdsDeB",
  "key36": "3bqrr5aaABnBsQJuNgvqiZfGk7B4xh4ENdLXowbaqknzjrJwZLgYebCjawi8SRtaRd4ZNpkKopC2zDwGDxtqdYAp",
  "key37": "pxL2ZPXtRiSjSsiADJfcD2uLBu8Z6YBzizF2CTTHyVJtvEidUkzzCHvcJPk6o7XpU2vJTjF6paxirgbXUQh7He6",
  "key38": "67eHBDaEE6SMNZv2hguKmAUzH45T1ecdxNvJWmRyaqkZnjrFkVTEATq27JsuEU96RumXdHuVt3JKVcFH2RBCkhqM",
  "key39": "2x59buaw3L66seYLNcSgEwa8BXzKciszJcRcNRjrZeRwkREz8qVGJPvdimyKrQbAXDTD1icxdCjDEs3awyQWTuDy"
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
