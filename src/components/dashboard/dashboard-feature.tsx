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
    "23onGu96FofXVgaFD4L1xNsS6EyX7Hr88ERQCfs45QypudmX6pjfwhazd1XVE9UtgqCpCXPCsVSDCDdGzDnVpPio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gaRMRur7fdMNJRcxgLdwRPDc2wWcisHkWKUAbLB4nNUk2aw1b6B41n4RZrb8n61RZ58vBRyFMZrPmLeW6HF7Wfz",
  "key1": "3tJ1zzK1HntKEDtE1Qem1pNbAGsPHyBCZme9S4nvTcZpMtdxDoRXctVL9DTvrtkJ6Z3KdMpm2f2PMUioUpX4kTC1",
  "key2": "2pUW2Lq89TsoBLWYbXcmGQLMXRrBB6AHbPZWX7uxMvhkJ4TiHxwo3WSaNYtvKeWxxhpmRAfynviL6AXWdWL8EEBT",
  "key3": "2Bz3ghZNivCKmAgKt2ht6zjxzWWQt3JrcK3JnwyaTTavfNZ7u4NnSGt3RuNK2xcLnDam44WgK5DAcxC4BBoFaXih",
  "key4": "U3Nr67TgNzKAK8rgv2xD6ydiGTJiXkx7dNcCKHcT134qsQWKhxtM9xm8223jy67g4JUiwoCcFm48h2EZPbdh8tf",
  "key5": "56uRgL6tgpuuopxVJKsNvD1R437Jc5aozVCtS8i8ugpVHwLKTaev22jnm2BsTWehdojqPg6k9ZaQTtNajzTrXE25",
  "key6": "4FF1jPWZuEChrN3Kk9j2LG44Ciu13vi2ZNXy7icnPichkvpyZMFjJ4rBELsyTNbAjg8xeh5PzK2oiv4ysKmgAhjJ",
  "key7": "5zAoWo9VzcC1KgypZMjpdPKpfctFmnBiYTgtXsiHud7DctF7ZWng1CR1Wb6kQx8nshXsNyPrXk7o2Swk5LaG6J1C",
  "key8": "2SWpTGg8BnroCaajVbE7k2PVK5vpVe4WsgDuZA6bmD1bfPNXRZexMkFcseLj15v9YV3iBKM4uz9MKt4jteUjugzA",
  "key9": "5J4qe2z1rLM18GG2i8TNedukRUWNUGR47h84nMvZen1LRw5szZRpo4HuTMvvCsfV339M8KZWA53P3wnmYJ5tPSr8",
  "key10": "2roCyiSyu1GAEHpiG3bHMJz3MNVNovm4FXqMfxt17dRoxLoZgg2VRV5MGZ4gXEwve3S7FzTmFBGoDkKqcfZYt2rC",
  "key11": "3BwvLRJvy8zniipF2dnzsHSKNX85XiUo2CNTCW4cc92HGvVaoz5mQMjbETBkCiTDqEUm5qfjReni3EpAdd8k5xNK",
  "key12": "5Fykm3akKojqhcV6W2jKH5geXUdhF9HBhicqSvXpS7XtMtNkYur3Jmj218yTXe6NugnhAu3Nx2soNPJwV5ouR7hD",
  "key13": "3HQpLnoKso6QvmyUJ9CwLkgiANMjYKGBpkoLQrfs7MbGNAZx3AMi85XVaHXcrn7arPKbUrbRPjjbkpTe9EasDsF2",
  "key14": "5SgyJBvbKfCPuSGXBNAzcvMNfjHPN8ME3faKtFYdmd9GWw1q69s4iYS1tzhsEdnjTqqxLc6kaecdowqhoXuRUvtv",
  "key15": "36VPDSGuS8jn7oXsek3fDraEKqeMo8Kt3wdwHGoU14AmXHPhwodxBCAdnHCM7HWXPKMPyRDTV2Kkx8xLU4yyxhuM",
  "key16": "2DCrwkkeX4QJERbT767RyePPv64EEyaiQv99piyRe4PKJ3dUzRmCymbmsBeKL8VwxeR1uo1xYRa1ynDpggv2cB9k",
  "key17": "2KuU9JffGgrWBG4S7QE61b7pAJ9TqQ8oBav6o4yS9qGJJuApsLcoD769W3LC7aYctZsPVTna2ynG25xSHsp87P6B",
  "key18": "5jewTLSCkEGKXWvVQ1PNeyQ1PZQEVrNTqq8MqHUPGUhpwTn8AJDha8uahBxLqs5AZTqMSZLeGQUdfCRuLq4k6ctq",
  "key19": "3rwFdzmJej1aMb9hcThruoKbcJXSoKddps8CxTwvefGfNcrvk9H3k32WqvxTYugpa6o7r2BoYoWsw7wgQrpLsWHv",
  "key20": "2mem7wgSQVqvcxs5vkRmBuWSr6bVJ2dTjxfr4rcXny6K7LVHZdGRSz4avEKkuiUVf1Ss1PbDoWDSgjbWzzeLX9SW",
  "key21": "kPEhQPaWaGPdjoQaNW2ZrR5YXXr5BJvcymce8NAj1nGpUTjE3eCWksZoJ7n2fcugnDXGZhtNqfCpinXwvxpjfk7",
  "key22": "2iG5Z3PanbtaNX7s1PgFBF92rYMiqFtuNWhRc49LnrqDGp8W93MCZU9tz5dEeR8YCLrY6faojRsvUvcj3mXh7cM3",
  "key23": "3CAxhAQHuDE8HG1pgVfL4R2ntjEdNp76Pc7ayHjJiS8sEiFbNyqqczoRPU2QS5oRg6TqLZXy5sgwgNdx4foQPX6D",
  "key24": "VqDiTxLBhS6m7qVbXCHTd9snzinafWKiHez6Q2nk3DssvPdYW2PyetynJ5xGVadcYtTZu23H3986JtEARWRGK1f",
  "key25": "63M8RsPXKAsrrp3SVvKsNt7kvmgnUFN4UQQYTti7k7vRYQfnPzGf3jJaJ1cTji4zKrd49rdMD9Sn1zfmoNztz7nt"
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
