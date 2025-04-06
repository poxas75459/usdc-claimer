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
    "aYv9AvzKiPibVcvEemAiA45VL1H7TYFzGNqBYTHp5iemFBHNgTKvbf7vTHLJFFFJcpFBr3i4SHQg8tV3CQ9gDVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ghUYGmzC5PHVqCuimZCXSB1rEt734pKZxw78cYcojh7qt2nPDVnPZGLRqv69VNyapurYBokej6SpLxTgvVPrHN6",
  "key1": "21BYjGMpWEe1ThWKhfojRJqfg9B7JRYPnWStDudwQA2nArYZUCnN2qmwpEQPHri19eerKzj2bP7FeRpDNQKbaYCx",
  "key2": "35i3xp13CDMb9Pb3JvAvhFvP25EVUE6BdfRGS3ndVsZ9exDXzwthQ7jqahZXKRUJL85CDLrWutzWNSTXamPVQez1",
  "key3": "HuvF7pgAyi7N6CwkqDTiojJ2vDkdt1yhetSHjDHX37YSNjqkwtCv2u6KyfMPhSMeeKCDp4PLC5EsZy1N8YpZdtW",
  "key4": "2iddTiRWMsYm9tsVi4AyKbbBpQC85CCMVvQaz25LwKTKS43waVUSHRpNgxcca3fBYhc2aJyttmARJ5KhShC5AZ3n",
  "key5": "5mtAmF1cKmwUxGAeiDRaLA3nZGq9S5cRQBuywHzVj6VbSniSE7WUUBjX8JQhDhJcjrx3dwNz14r3euLhc1aRKMN8",
  "key6": "34YMbncBGJfMEdnpySCTF8b7dyQJT3V8NSX3oKgjXPtCVzbBiDppmVuzMi7gPJNCzprSMEzvUNr9jdayL3S5H3VL",
  "key7": "s2NNEy2ErEq2W5G8SyDpEHzMdRC82BaqDnxWj9c5DQ4jZeQF3bqHhGKrggvpWnc5JwvENenndxRX72Uhwf8SmdZ",
  "key8": "2yZ6Ta8qqA7r8LygnHgM9p8Jx3uK8nccP4cPktRwMM81ruwikHaostJYoCiq7w3DHzNweW3V7KSfxUJj8UPU2xxC",
  "key9": "61KMUeUjHV7zcJvj1cGg6R2CCWVJp8fp2f8ca9JmWyxQFX1vdyUcUJmm6YxWc6dwQiSYe3SLoK4JrgwoqYhBaLWA",
  "key10": "2ErguUjSb13tmFmNV8peKfCAcNvp2mk8JfT7vZy6hAat75oEn1Zdmo6T9N1RFFq47uvkdeF7yWJGaNvyxtyPouYf",
  "key11": "5JCPA3imJHy5UxHWsGQnVNJYxqXYFNMyxZZ8p9aHrNLYeDa4MMmPGswTvqo5rc9zNq3P83YBnxiPhkUxnhnpLBfV",
  "key12": "5TiMjECBWeuokD82ESrt3d6G7At4YUb3ProoW4D7FQSsNymDJksaSaqa2PjVbheZyrYHZExYfmvVKQVSQGngLtjt",
  "key13": "2Dq5JUYGitC3gvKc2YatAHNFLBgGsrwrafKfMWr2ncZNStWcuMfLi85bYHfPEfSQdtvPoEthW4mpsrDmwqmmhxiF",
  "key14": "2MmFvXVB4sXFKTHt4CEMERJAPh12wveL7Xuf9mYnk1EJB7rRzimTn7Xi64txTVo7FZh8PN1MCPYV9CjCsVVMJU2o",
  "key15": "5ZvnngY7iaQvyjD4wjr5Aotdmcp46GVhvfYRuMJXodkukiD92BrCQbv7zexYsRTzG4DxxsKV8LRNFqdKUeiJNXMP",
  "key16": "2Wx3h26sieCKXEaaYYwWqg3NP5PoL9Dy7opZmkY7drPnm8UcTv4pgXdLYRmPKY2jxXzYPsD9ruSNBP6YGQuz66m8",
  "key17": "5mQncR4XZGKih9i2vkz6VYGhi7JqaixSXpMToKBLuPbU5XqAU6UUg15bYvQXXWj2UuXL5UfPRf38Yqdt41aC379r",
  "key18": "3BkSAYKaqwmbuJDyV22xHuztAnvZVp53X8gZxo7vWiUpSnLa6eRpCiLZGBaA1xn4JZQhPVtswQ3m6zuHQ4gSKWzA",
  "key19": "3GstCgnFJzH6AchyT29jYHPDprSV7tJzFeb4CvYRoN2DRCVEtbMSCCipyVPVx4fb7JyUcQVRimeTrWywND4z64pF",
  "key20": "3kQxfHDNH8J8293hzKUtLn2FSmqyCHaY76baMnPdVLNhRSMxKxAy2ENXZJVEcES5ZNKz5PkGhgb4juEAVK3cnhzx",
  "key21": "41KVC6hTXFMzYJaMGpTKusDSUNf5TMSbruv7qKiGcTzDbqwXnqCnPTXDnez19L7qQPMoC3PrQe5uRgM5S8syDrGv",
  "key22": "5xDK3AhRxrwgiXZHpCtei42vsyk4iEUvSpy95RaEkqh69Uyi38YLBhucKMpJeFrAfDQY6pRbP1yBZDLvKepmdYgw",
  "key23": "2M4oAVZRtNJCGKE8AdBFunD1p6Hv5qvwCxndeBp7Nah12JExkGvE8CDtXS14duWzrtkP2ZoUjMDmfRPpyoNnh2TZ",
  "key24": "3AV8aK4rBkDeZfTv3v9BhKVxWcw6su2154WA8RZ6EP2QZbeRYoyrENzZPzXxNji5yfpjMzPCrzeqvbvy5tWGaTCk",
  "key25": "2Rht5BrPCCy2FDTDBK1iF2idwfFLKhJ3FKuchddwH7SDYfdkPWcBS2vGSWXSxsL2QPspBsVjnrUF9oKmksgp4b1T",
  "key26": "2y8Mjg9MWP2BcCMHMfkyorjonVuwj4T2NooQqvENr6kwteRBx5yUpC8QZsyn7NmWX93ikxmmCzC2C7DJZnJJbkJA"
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
