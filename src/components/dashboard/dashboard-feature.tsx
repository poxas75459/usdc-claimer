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
    "CnBPAsLxXc8v91pNkcT9moGvaMFhvKwNudWLSYRSVTeLihYXK2GyZPUbmGTUeEFf5U84ggpUrWcmz4eJoW1qyUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XX6kmbFEENPo4S2QumdbJ7YhwsjUuaHdjjvz8GfvsUqaBdRA1jCpRomgRS6zBuwV3qZP4vsQfUojRZGNLvbB9pV",
  "key1": "3fM5PCX3K4vFtrpZpomdRSEkwt3gXq3jmU5MmPXag5J36AmWLrU83BFp6tCpYpJu4zxHvLLyT47CMkwwTXonVQxo",
  "key2": "583uxVjzvzSaUHyHfA13xhTBP8oZXRi5SMxG13Wgi1Ht95x26Dg7MnhXmovNwPMN2zZXFQTSXBS53kT82qNCNBAS",
  "key3": "cMAjyLJFVStVp64WJMt8RAJpFyhvF9T2PTXXJTAiZ3qNCr7Rwgf971TaKU1BnRXr8GDeMW66Fea2LmnbF1ruAiA",
  "key4": "4ksgbYxnegHpr8ow8Bg7wUqz29WdQUct4KFfvkwmb3a5zZFpSx2kUdL58WkdTSsCuqYsaybH3Mr12oCA6LuSN5KU",
  "key5": "5ypXsvZjAmpZw3y1g2e5c9MmmVxBQ33nR1sqspuyvjoQSakpCtFvzHWnucVGPTtGWQsd7XnqAG7dNrrpNXnAuQGJ",
  "key6": "583CoBGSYZ3XDRNVWYS8p3tiZaCKugBRFNX6HNzTzfgizu3wrheYab2aHxHBxm83wFYeSkrhrg4EYQPRRTqn5V2f",
  "key7": "U1CQhHtua3VPqkMLnx9MraN3tj4NrjfHGwiqR9onRYQHypxLGsiJywZogj5uj6qCCvgmtgso5psQbELHtSFQhTs",
  "key8": "2BFjUjtQGhfCPmm4sdvAcBBRvTv9s9kTifCKscjkHL1KYtjz8YdxNpVVmzxpnFQipWTMSV4cHYSpWCJjsg5HG6Vt",
  "key9": "49cSMmLXNqJoDUhSUD6XUc8mX2FUApXGmLZoy8yZ1A3EB6UDWms9Z9gPE4LW4vE9ZnsGZy4JiGUMV5pxyCvLdG2c",
  "key10": "2udgvrzZ399z4EUrHrD9u4TuAkdRGrT2Ti4YJTiVrGZkzQsVLwbUJg8rMuVK2pYREka144G6BvBebxAwGTDE5teQ",
  "key11": "3Y685ovoa3cVJ1WFWc9DQs5gKNcwkVHaG91kJn2JRTCjFwUGbvuc9YZVcDne9EN3YFyycRhM8NX3DXuNcS27wUm6",
  "key12": "3cQT8whf8sEBeikr8fe8JCdsPqHZK2hbd3PvrcfPBQtEoVyLTUykjtuDHZGNLsRqjq53vyAoryrwyTKtubyTSRPw",
  "key13": "2cHcSX4wUHVumi1uRTGuQsec1EEBeuHsTHEzXrLCHfKrRdWp7Mym9aWugpGCr6tkTHsVEHi4PrfmLSC7hqDC6Qw1",
  "key14": "ezTTexftizpjfxyonWJPTzrUDWwokoy6sfUg46LKXh2E14bFEfVTqoX4mm6bjzA5kn7LsKPMqJ7TQb8cwd2veDy",
  "key15": "vDnJdEFGErLy5qJGtW5W7oY6dBppMCpSXkDN9bKQKYPb1AojsRWy8KhGxRU1UEBbQgMrtpXD49jKSY8UU4bo7R6",
  "key16": "4yWETnabjASB7Pi6hSA7KS5nS7zNC7y4gmsyCiqiLRVZ9VfLWGKt3uJNUV3VmjZKNkb1uWBqGuaNKDwDemNRRz66",
  "key17": "5XMDFt4EhWnfM15VEye7nE7UB9QFeWDKeFmuJ4sAT31VedWgRXE9K2R64TGkMziqDhoyo9G5uLCZ8Vz1CH6YK2mX",
  "key18": "4TiHwzxUm2GfUncrzoVv7ysC3KFHKV7WeHa3h5io4kB3k2JssZpEwDkBvhorBK9h7Lc2Rzup2N3NTe22ETTih4NG",
  "key19": "nsdCfceCZXDEiTFSw5v1xsEj3rgoBnhRHuXTWNNw6ufjgzqFkebZaJ8G2jfB3tWxqSJVjVd2v9swNsr1ED6SBP6",
  "key20": "3FUQeixAsY49CUQhpM2GhJvnrbLMLnBitMgrdymQCjpeZP48FTm77pnbVBeQrCPXhFRLUnZ5J2D641hdXD4AsWPP",
  "key21": "p94RSjb2Bi4rJzAsnHMwWxUirnK1HvPYV3xcTg89f2xFW6gZQViPfHZKDaKFs21gy3oJ1yfnTs4bDDePXQakfTK",
  "key22": "32Rnqci8Y6ofxmCtQS5jWiw32zB1CDVYA7XdwcDxXMh9KUPVGZVHK9Rr9y2jQigaDQ7TZAJfbCvnzbsbvLYEyNFp",
  "key23": "4i8UKf4eW15A4u52c8UB6pXUNve22KrSMEMTXK4YdCm2R4nQMtZgSD2B1JbwjgtAqrpJkFSiYb4CcsWo1eSNKp5K",
  "key24": "5Vr8nwU854zNUKiCrj7aM5TAkgpAkVqtqUNv4QWfdk6vnba6sqEMa3MoADTGvuqXAfUTqchD5Bwnd5pG3LTpFyRH",
  "key25": "5wgM34UXmWEvATvRJZAZgGLZdN2R3zq2RuPCMpamtXFTR5yuDFdw2GQAyKi9b7j9TuvJMG95JiozRo1Z9mr8vVcg",
  "key26": "3MBEG2hVYv6bCUkeMWS3aMuTFBwzJcruiHJzozWooWVrmSqVKs9DVhnZbf57AABFjByzRqWp9j9NdwBYH4agDYmo",
  "key27": "5zTxEQZZZZATzFD7H68MptvCwZTWbCdoMnS8gNbcXgQxhLFz4MpkmZaMRzXFxQxurnPCAcyi4jPJ7YADs8xib7EN",
  "key28": "3DGPYMD3sxXcEeow3GMMTJDKp6LSzN5yuVMwrBWk9KV8W9Dj2K2H6gsmnKL6vMRkHBfb8vQcyYm34uW9XC4BPoYe",
  "key29": "2wdCcDMtkEUKF1iQhn1b3J7qJcr7Dac7csHQaPz4ieD9gj4bsvf6ijU46S6jrRFbKwpvRccubCUfULvL6Q1ucHT7",
  "key30": "3dkVDpUHjbJRkj62h1VKycEHsc82adUNAFctwNEveF5pmkptpaGYCrzUTERLoSZZkQ2ypYEA17HZNfi4xuow9tpt",
  "key31": "4sT15skL2txB4CHz1VVpj6epaGiYtjXFhTpUwR3cFxDz8U38sQTKpQTQmEA133BJWfF9pjciJ4SsejWjiUXYEyAB",
  "key32": "v1ku8n1Uf1baTMeharjEjnPidseWc7m1GeHmxq5So9wMhshXpuQNowYRE7aaBSAj3q8AM4wXbr6E82nhphKKVsZ",
  "key33": "4T2VmaLyksdfpZxjWWrsLAktW6UBwCNEviWm2gcRo2R8BiY1dLAKzRzuveAqLDNAsAdHGPE2Hf9QRsQZopZQH5qk",
  "key34": "3JCeLRubheNc7qjGe4j86Yo5qdgvpWhCjJDCDMw9bUvZscnv4aBgNdC3TzKVKUiX6Mc4XAtXtp82jQbSyomWmUVZ",
  "key35": "2oqgGMgvb8vLnoGKDR7fbkF7UirZC15aAfpMFei395C6JTFNALJUzQoSCHRapj96WyNq9kGThXkuNPNrH5bEVPaP"
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
