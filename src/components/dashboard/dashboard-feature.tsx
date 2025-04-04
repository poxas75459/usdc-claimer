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
    "4kMmoxoqhx1cVW1kdMmbhZerQBEMeNcxR7mVaV4yxQxefXswGzg8K4T6eMReLSy4V47dm3QRXAisimXLRzZFX4Fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zeT9QwwvimFwuEWuZZswsaY2DKwthH9gwCMtkDwRYNE5nJ2sP62RXh8S3FRd8S5xLhM2YmVd7NNc9XcMimuBs9h",
  "key1": "2WMAUQVRYjkBq5veB6dZXFM7SQmVqCVZAhvbd4smQjzQdTe9bZxRiDrFWsC6cSo4xsEwhjayWyp9Xs78iGNmxV8t",
  "key2": "H39mVtqCuoEztLdeQqgKSPWV8X3LeokvN6uU9hR8vHVm33t9ERGP3RRTqQtvL24BvebEs8LMfXUccx47SaMtBdF",
  "key3": "3iHdRi5VtcE1oV9PyJUZnqtgBsHiyD6PyJ2J2SYTQXqt3g2xpoA7V9o25uhAuj7LaX7TG8XjJm3MYW2JxJf8xLB4",
  "key4": "2c5z1xR7xAjrG4zuAgseos2A6DwKF8PTyg2SB2wQmpVEs1f9McLFS5UxA2JwUw7EZwLfEVwUcikjceALhzzzXc3G",
  "key5": "5MUyak1gVAigxeRydnfaJ4LcVqxBKbqov3a4StXTSjZuWa5MkNLWpUvqrMpnQje6DWXA2LPVWsT4TzxjE9Xvqeke",
  "key6": "59ZTKtrUwsRrSA9NeQhKsvTLsHcgd8pn4DDFKpc5fyWdvqcJ1DEKF45aBmj5DYDFA3h793pNchwbjMZZ1vofApw9",
  "key7": "48uFrkB7gkJ7hr4TdWvmtCy6zxhNdACkgJRaD3WgYBSRqbfsK4Ph5HNjoDag1S1Xb4yg4f4a7vYQsw8BUuQKXKAc",
  "key8": "2j171FsNpyATB8TEXcuyHq99ncpYytCRdvsteB9qnQBSVFf2Ak69dGHiNZVP7VrrHvHnHxvMqJDoyq1GMaHzFjSc",
  "key9": "3eQixW5ewdQ2FL9yrwKfNxWZh7Ze6tuZpT2zPgvbLhAJH1ECgv1ESQ6rsEiTevxNFUG4D7VjffWBYRxN375T9ozz",
  "key10": "2v2EsEBYRNyXx9KqiM1MK1Rg2PCiFubMgGS2Mvf3hiJcoqCkKrauT26Vieb7dSyXesZxQx9JejKZY5gatREE26JY",
  "key11": "55YoVKiHJH8PtP6Dyup4LuNz4Va8E9MFaidGdxy1f6vWBZpgxwRmRjgAvUoqDZD4V9pzNDNht7nC3cWKsrTGi9Q1",
  "key12": "CcUzNw93YG7E2uM5QePYZdpQjXWc67hyi8YTWmbe1pP75uun1ZRk9Q6tU8jKmCrHuLBSSCn4fTyWxB9qpLyNjK8",
  "key13": "5JQgmd35NyxcKGaGbwZ61zXAepLvzMUhnc7KPTmrNRg7t8MK713QfmekwpRx5cXtsurKvRhfvKf14TeBvrxsV9oc",
  "key14": "3NoNUPZWYhqxbcf1eu8sFZvh27gcGSaon2UArdUaJfmXyybERjqbsGZPwq53DVjjFcmm3vn3arYhCDJpWXyZvdVF",
  "key15": "4PXGBqKN5JUkMEdyj3eVmwD59CdGkHp2szWt1Ju9zCg5UNsHDkQWwiVvU4wC8JZeFi1mZMTaDiAjaZH3kEEHgEz",
  "key16": "5H2Uvc55xaPPnTH9mDLMptqXmwzH8VFPyXW7GdJgzBppsQ8KEC1dgHGd8QzpeuBTDkwobqqaPSicnEMiv2aY78EG",
  "key17": "5gSGn8kn1m1AFQ9H814YuzRZHqzXkqJfcCqnf4K8JCzSVTxyn9MrKry6Q2Cd2D8hsySZw4hNXUsnhDqajZRYumgL",
  "key18": "2aEnU98A6t3FzPA9qjA1ZVeYYQpvjUiBENzwjQJ8icu6F53cDJJNH6VZHmRqvgwp3ZrFhSfQMST2bzvwXTzKaMyw",
  "key19": "Bn79yAs8X2HG7f3Ugje9m5BioajDnR8pYFWfVwUw85BVWcZaDFndeccaRqT3x9JraCThjZpNiJRSbTYfRHz386q",
  "key20": "5Li81gVGHZVUBmz54B8Y1XbhEHfbMQ228ntyXtHNR7Sv84D8mSNgf5rXCkHDzvxtoMy9ZtRSFsp3watWG3NK191L",
  "key21": "WyhY9XV1bJPfqn3quyntXYfbkUPfHxbR3hKWBLsNc4Hmh4dCn1ZcWM3pcq3YAe8uBWw3QMaY6LnsoyajNUJ5hiR",
  "key22": "GRpUPYeQR5xay2jSpW8UgmzC2ayHjY9Cx3bLJfe4anQch17S9N1vTQgjxPECnCGm9Q9h3dsRMuJP1CNmHMueA2x",
  "key23": "EwMFBTAaucJ87vcEcQnveEgQwt83AHewbTWBj1GcfVHkVyLE2zGKCfgAmrhqW66Kk5ZST5Y3HRovodfnMCxLTeP",
  "key24": "4cPZoheosNrnzeWCcTWpfzFa8ZbcSu9Fpy1N75eyBKz94QPzCez2MFFxLo9iocL72AxjgbRhTjoTXREoie8LuSoc",
  "key25": "3ia9q63iHD1FBZnzNy5ktuFpj3kVgA8oq2Xsw8HoLgbnGa4PfbRWkLBff99jnrTVAFZ9rdLr9tMrtM48JFmD5HtY",
  "key26": "Qgs2Mckz7dQVRMzWYSbv6LhzXuCGbeGfeN68ygNCNUoCuNzzqwaFVPXdK4Rj5L8XDc5B55hnJspj9hZZTAXtKG1",
  "key27": "xw2HCsaSGosQ6GKbiakQFAKizSyw3RXc3J3SEwyBPZrrfg9vcseAzYAtbCDQESjRZnDosaSKWm6NoPoonQzzBNz",
  "key28": "2JuYBhLKFKkUYMmKGJZbGvaBL2t6ndXCBXbDdT2nRGSXC8cds4S5xNKtQHR8mzjmbtSQ2kvcjRovX5CeafiQ7Jpr",
  "key29": "377biAVhuZ8iNEXvyoAi3tXJvcVdnedeJU6GmtSkHFceb1PYQP8VGAT4J3NyJKU8CeHzyQRu8uapBTLScJnGt9YH",
  "key30": "4q3ZKvqG1Q2YRUj78LPNjod5BpTKxChnuop52bRKBGaaV24fAHVfUdBH7LXbTJ4Zns4AYNy3q2WKpk6uexjdZCwB",
  "key31": "5VdJrhMq3YGzZz8Cs4gn58qmHU1AP4pSdnmu1sY3jwjaPg5YsLAxH8rJfWdsapHCZZCD648KvAcHSPGWSgH3ci3Q",
  "key32": "2AQ3kfGPKRpFZgFLzMrzhyccQTMYXhMpSyzu8jrRoAVgrsTZgq7ygGaCgKF7MJQvFzcXHqeqNrrVZSg6DWbyttHp",
  "key33": "39dBbmYgpmKsQAvxFxpkURnLJCP3k58e6Et7ULbYmtcVXt3uZtEtnJiVTVm8teA14d9ov5uFh7ao69sFXuSASWLN",
  "key34": "4u8UHRrffCACAZqNBtDUff8tDdN1RQ13MbNqKyHTzEu9a68uGDvdKgRPi43JVyKjsSqfbnHwU9B1Zv8Maf2N2bDy",
  "key35": "3H1x8mpcVFdvYp2yxW9Kkov5tFA3F1bxmEAiKgLc4uNSN1tsCMybLFerBuXN11Sp6Zr724VjQEoDtVwAPmwJv834",
  "key36": "3LYYghcmqeEHyumqiJQJ5BMt8FV13VCfPQa1yz2bDEa9fxXaZkBzMJiPNnmAKMaGpb7yU3JWgjDdGx668FxvMcqi",
  "key37": "3m1WqqyAKj3gX3cHm9tCQpZMyaPtxqrxTfvApKb2rtuZ4UmcWNuDtBfDXMRWc9bXB6CNj5kUHEtZDk7RAfcEmMY4",
  "key38": "KHwTg9YwvpmnM554cdfMKs9iWAiLAgKHLpF3Hqukvz2i7vYVTrCnaUL9A7AtiJrZnDbbpRZ9MZ3Nhmsn9FjBXhk",
  "key39": "5DkdQQxDvfodBntwYMCym1PPKqHQ8KRie2AWc6dUqzfLU7bi1tvyUqyYWeeptCAR4ycpjXn9hck8SqxMJhDJW5oL",
  "key40": "639UYvFTWQ7czeMit6EeT23qhfVZ18b6cNVFEeCgZXDwmGSPbsGUYBNNaMDRtgrEPNSzKWYUt2yCk96hCEwwMabs"
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
