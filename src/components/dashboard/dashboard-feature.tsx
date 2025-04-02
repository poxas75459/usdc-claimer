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
    "4HffrAZX4B1tg7Uvm1asB1FgpB4aqhc9Cb62UayjinTrznTM9SbAy3cYwnJZs3mN7SAZ9p73iEk6u3fs1MvDaMnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aS7VLyRxcR5AKgmV7g2CvhzyevG7pNRP5SF5GZ2s6f3cHkVHrGSCjAS1u4pQYz6GTtp445CGGT2fXP7EbJxck8P",
  "key1": "422EseLLwziSmBCWoDQj6y4npLfWANUaZeCmnQoCecrxTDRH1Bu51PvVzKDCu2MChvHHqTS3SDTBLjmDtc7tmeJs",
  "key2": "2ijtiNGfCEMxJj6JUkGxWxqcKCmJxfmJ676Df21CVgDXnd1baBT2kCN79NHT1h3BtoSpRhTGrPArekw9rAg21wf7",
  "key3": "5zW6EyFD2r2vYExFEviQCPXpfyhwKQEoHNukR5PaVcBbta3caKC5z8L6Tk4uTJP21qgxSmtYduRHpq46jsJFbTiy",
  "key4": "5zAvyYtq5YoivCV8aBka5DcYpCaXa1yQQctA82pJGW9n1DASBxd7HMvZTo8k6143vioJwS8792y1FFcHRi42DHrL",
  "key5": "41XAEEMAuTScpqk9RQ6fJCLnSmf2jejktzeUTaydMDivzLgisNnLVCUqzBPFVh1ftbwERaX5qQbdnm4iewFNbEn7",
  "key6": "5S23WeCkPr398apHde5KH41QvtV4PUeHgwBbn4nt42dZzRc2ES6U9rttRz6crE68GrwUEZ3v5AvnQeTiePhffB5P",
  "key7": "2KE6sbsuuq2xDmbAJCe38immZz5EmJjh2ayaPgjCpMvBzuvY5gTPj5MDjo21Rc74qdhKWiquyewYhoVsdMQnFU5T",
  "key8": "yGGv4uj92k9rGS97Sdy46iaNnejxyPanua6EKSAsJ3fuDKVEURBPhEWDE7kLVfeytUX6kin32vQvn4SVcTJG8FW",
  "key9": "2fovAC1ACqvNc63Lj7VgEGv4ubeHH2adcwzZZ4m8wsxHMmURdC98jJnNbLZA7HG65kbS9vuYwbEBatjHTYQN7BbT",
  "key10": "3bp8EjWuxFNaESruHZgy1VZffAWFQHLeSWo3H3phRS4mhDT9HSoNWmwoXZx1AuBARmv3BRhcMoc8L6UZBrhTib5V",
  "key11": "2C3q2so7m2xRhXUQVrqVqJSMVru48o2fUcLAec4yZdHxbQwmMHBHUEhqrUP49QxFPszG11ScFFMQcVW4uspYRr4J",
  "key12": "5wXuNjS9jpUiGRwzBGLJo8nmzvoQzdv95B6gcpnVKXLdsFR3rHGb8zzVjP6iJc3ydG9QN8ohwthzJpRmD6jvbcsC",
  "key13": "53RHEqwoZLAd6JKGBJo6o7djGCynTvS71uEAkK2CjGuPBWjhCL87fD7tECLnBEWnGkPnLwknkHva3JTCTBd2bfiS",
  "key14": "5Jw7uAfP2KtMDejucEfYSwXjvrXGufYMCi4yVGsS3TtUaaEXJjnDoY8RCcmveRqUXjTAyCqLjY521HpRW8BmygJL",
  "key15": "5cQtCxy45Rt9vFvur8VbhwuovtfCoWekMf5ngunSDtmGkQr31ZbQxR27n5MSCUH8yFmyrMQ2kxEK585bwwC4zi6",
  "key16": "4QhooJhzj8CsoALEgVs7kWhZkPkxDLRGWHUzFhJqsTY24j6DEFShr6ZgYdWw7zYkmFX8mkPYLb2AkUSeh5W3kfiT",
  "key17": "5CYYHUP1QAHz1Vd1QYGB6XUxG2XQkJzMymzuQZHC6G5ptqFPJDxgfAQ2PMsT8PyMDNFsudZvGMMqwjWkJLqSYBZi",
  "key18": "54AXEwaVpwNxWr6j2uzP5TeyspBGGqB9E9L32ksGGJAMjPsmcNK86hHY7tLQsr5Nx3NL5qe1bfybxQd42rSBM3Kj",
  "key19": "4rPjdbzAqMGC8L79DRRxjZNGWXqUtzKiJEaTia83XbXeXFigg1Prvd8hGXNypPq4mTdNG6TB5wknvpDAnVoUyL3i",
  "key20": "PcMjGZNL2AknXPK8UTq5UzHBX8QB6NhqfnS6W7UwR7CqLXadk1X1tGdMgtG9QBgkJupQVkbxYJdBfaDtS8vfE7V",
  "key21": "4JBT5rNFKHF7YWbNsNT1Qq1Jcs55oRyzPLBwH1Q5vuaEmJ599odfj9bHpH1fhsL88RsQqEk5bRFBwJEVMj5N1th9",
  "key22": "4QjMv4TPuNqbYFkqCY2fCbSqbb7mW4ScnUQjk4eR6JwEio8x8zNrez5Wb9vdJaymMJANBJ2Kno1LTLX2fyyeXQ4f",
  "key23": "2Dzue9tJ38WReF3fFCLM5FpJFRWmjS7EMUAxU7Ki8ByNjaxoG2E9hdUoHyZpcv63CjhiGqeYui8XromcqJqXhy7U",
  "key24": "7M69TwKnGL5wK48wmGUopypqeoHwgbD1dVB94cjhRtbWx8dtsoAXKYW3NRmk5T6SibGRfmY4imERVfRNrQptPFN",
  "key25": "LK1cpvkU3VQv4hiBo1mA6fmz6C3u3767ysFBHmtCA4NE7S2gVmRaejonhKNRQG7UMScjkTSHr4YFLKNzb8D39GJ"
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
