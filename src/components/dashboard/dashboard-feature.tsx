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
    "2nrtdWQyb24jEv1gpNmjhJnmypbKRytBG31XtyBBvXTu3JokhS8u6AiXQP41zTnTb5mEvjRphCKp3zyx1MjWrg3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4zA8sLfbsYPMgBKnhQDNGoCCrBThqv9uaXrqxht3MPtpG6TxbGWhBkh5VbbzgrhYeueoDxXqrgq6syLAvUTD1B",
  "key1": "2bxdD2vt4NGN6WgryURxYN121865ioYMUDnhXhywCJVRHbxiFYwzQQRVENzhfcMzRSdsgc2wiA4edBzK9AD99bmh",
  "key2": "4eXEsftFGZaP46i7wrZy935KEUeYKdk57Ux8YqLH879aYPXMLAWViYrRirp2nWKSwDbtyzpTHbihsBEE8YfBBXLF",
  "key3": "653tzcvx487BpvwuttT9L2um4vneEBnyvPp4ehPeXYxo5oC1JouoPKsEZu6TFWhTwCx9kJB37UNwny4CD4Hm7ygV",
  "key4": "5bjN5Wd3vAZNVf7FSauyGu4Yiq71vbpDk3NTzML3RupsCKsB8cocNxjYTVj5mt7Vtjp6zrohfmJhHLJ9eQ2NGNx1",
  "key5": "668Z4c2f5H5auBMLagxUgmWPRNUoGLDM4PMbAa2rJEERur4hHf29qKgm1BMqhmi1AjritU8Xa2s3bPwhYsHLTqpE",
  "key6": "5BUZ6xKH56HXwCVZ2AeokAaN5wyJEo15TWqksKdWazQhRdX2LzasfXAgk3bcADSnsgDaxtGrKN1VrAVyiTYocovD",
  "key7": "5pe1UCqWyFJDENjKLujaErSeycLinMiiNXegWHaUivoiTSdtqetQ9QQuXiGErNGRyfmhFQNha2AzPPVVBfpnVzWQ",
  "key8": "5tsbiSBQnbsErWxsupS1SY83yehnUy1R9KVYACxcf48tynQrbxDYaSW4cTbhEJFZLs1bQGSiC3Y813TSat4zef6y",
  "key9": "2UbjWALNpx7wkhSkgMPNccQyevXYrZKQakqDhggUtQPtBW8s4S55HMPgUQXbqRdWXumw2LWTYzPfAPd6GF1duRJY",
  "key10": "3b85ySR8wz6vdk8HBWtcrMAEHPThTAEM29PrYa3epUQAcZjY4Nrvfo1zgM4aJHBL6KYgfWFovsZ5WbspfN8noMcw",
  "key11": "4Xh2r4tQYejF761asyDFvvXXdpRPNhPpgwvfywBwELMSp7QRq4AMPtLPtNMqEeFLR9H7U58Rx6dYTMiJ4iomPmqs",
  "key12": "5ZH3PemTRq3xXyTWiXPdSzfvrDgsfc9VgcHjaFknUjoPLiupZd6BLu6yhuahW6EWLyPx8YypeZAQQp5eZL8ojPkD",
  "key13": "8CMqZZBzR5sCbXreSqDxcapR8C1DrVChGsrJJzYMMxLwynLNbSfEr7JjVGnJmzuBnTAkTCqeksZfHdDcXfRtAsi",
  "key14": "2waEd5uf7aN6UD2TYbA5DNsdeeGZZrugSBwbKnBPEri8T3nd5eT7E8JcjgffMwcfhEX1zTqXn6Q9PuWaCYEk6UnJ",
  "key15": "4iyDVztnsfFpXZg9npSXcFFCcC1P4qcEFXM98QcaaQYLNPo7oXVK1QdAwVYKfPoxo3GY8G75FwdkEGmmVXaH9eQ8",
  "key16": "55AsjYDr5xEdSdjR6c5cZDonjjh2pkFB1VQHBXsVrpXgxicyD3DbJ4EUcKK3yXSGgt41gsUknJZRw5LsiXgNu7bE",
  "key17": "4K1ENLwaayw7uKWwgsyrKZeEv71rVXP391vd7XTzGmyt7dGi2ZT3jPoreRNUzKuM7UyQ62qmV5q6NK3vRiKpoayP",
  "key18": "gaqi6MjMQGeRpAAQYNYXR9WFv6T321k9dR345u8gvHgPZkdUHV1EAYU79qMepVJw6nsaZeqQ8LK5spencsBvZFw",
  "key19": "4edGvtFS2HHvyB3MYsAj6Kj2hi3dTrgvF95nojLMHrCTzdKdq5S1utFEztVG1r5tVSEkpEaraqmEn5Q2GLD4zCRZ",
  "key20": "4UzPGirsfRt32aDmYBwQXfXPWGKVPvzy6QrYTB1usKmRHqS9BjoFHXJgJ6FfeFLP26nDUReQNUhfeyuwk5bTVQ6h",
  "key21": "2szzhaEFgnJJMmcFRXCAChgbdaKfEGYu47AYZ6UFTueoXYaRqFoPiCqc7XryEf1ndZavcNzoXbranzdWQnp55nE5",
  "key22": "44ZbYeHUnRDu2LXsKCYC7nKHwvHsnXrBdzrC7tAufWgYHbXnUumDugsRppxEjRvS3bzfqc8ePPYPk1AhEi6VmBnL",
  "key23": "5Jps1VdJ9ieynv3gLa2RwMbGmw3a8WpG8ni4dKUrPA4kjdatGNL4AV48qqJpp2fHBcWcNRJS1gQ3oSEWRZiKvHYu",
  "key24": "rVfo3CpxWZi9rQUq7a9MHa51JCnovp9tq4QbrDJpbQJsnw6uHz3ACWK7AFUFsgeVSjTNcnCkga1PeZR7WGNXuCV",
  "key25": "NPTHWU7zSQt87UZu8Y6Yxe3sJUiWTr3XLLE1gqUrUU7wv77waftQUAryE6FmbiZHbdEj7nYDtmQSH6DreuumS9a",
  "key26": "2FS2z6PmWvRob4YEHQr9ecgp6UfoxcYaCBNiovskGq1x25VBDvxkQ4Rvc2LJZB7x2rM5KZLQoxMqxkMYATod582M",
  "key27": "8RL4SJb8Eu4ysho9ZCV12PtXai8FG4xu1MGaSBvYqUJ5MqqZvQ1ThPySEgUTMZEX3Ed2bMH14BtfCRbtvermYY5",
  "key28": "ZrzLNVSKjjZTRmm5pywzdCGSdFPUUL8cJNSZ5CorAUdS6LHc9Kqo8SbRCXEXgZzexGSGkbqVXxctUVvy9YgYpEy",
  "key29": "5p2tBYooZxg3j1C9vamRxWRik17LkFi7UEYiSt9WPqK2vMHqRJy5Aam3J97EdKz5Jt9YWZNRU41cPJ45dzshybdL",
  "key30": "2jkYSfrG8xUNo5DxZqr36QQV7yide582jEW9W7RtopkkRyWiiRSpyd3Sk8nxq9nFZo2J7yGU25QZxD1u2cLgHj9t"
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
