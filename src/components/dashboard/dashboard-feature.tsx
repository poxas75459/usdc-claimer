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
    "2FgNkhafkvNckiCPZtRkwTn4aWQHjo3oyYDKsWn62uk4A3jxZAbL4zK4vF98MLC2gGFNhHXZmPBpCHtQRdHkFbKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HqRCXkT4NEZDfKusnHThFJxS8fhPicHiQ7MYfL6Pw2xtNZPd74MHefuhxASMJhiUh4WDfGeyVLKpJfyZaypDs1d",
  "key1": "67ZNKYTD9EJV6rkiAtz1vECsz2dQmQRjYGdqPdffK1SvwHzQgKg4QVvMCFWzK2NcknUVgXKyn78rPJHkgs7aqrVB",
  "key2": "5y6ZFi3DUb22cuJjyt4rGbC1Z9wAF8trtsRBdqFFcRqJGHLsj2i4pyx5QFyi24QBtmZNpZhnxwZACD8NKN6nbHo6",
  "key3": "4PnTFtgk5niqrKLBXv61RG27KjxrCZ4aZBGQqeXjVSkCnUrLiHFSdWLhZ1VroDYPngkALyJBRRRChDrfHdAbQg91",
  "key4": "2Xu7fW2EEpLRsvsoGwQKfxDN5mZ1FzRFqocteHNc24pLwvQ2kyraxD8SDLaQ6y4pRJt6TDN1SUnCapzz6sBms9eJ",
  "key5": "cMNVUifteD9NvbsPLgW5aWvmi9TzvTiVBNaTankZPGxSf9RZ88CNSJbUqmbtT9MGoKLPfFwsZwFwawJVxSMPp3M",
  "key6": "5h3mEDtwChKAofMUcD48dQTCGszFgKAVMMuLdx2wVZHfXPGDUtEV4rwfFpXRXKnsLtyqQkKKCxGpcPhbsmiUr5SQ",
  "key7": "2hGpSuxvdtdA941xNETH4vHCzUveEJ1tDQtnAkJPoCw9GecgPD4vbpsx5Rnwt5P6AMNh1dRsSECKYx2NoaRKj3WW",
  "key8": "4RF3e4QbyCZrVntCdtFw6FNiBA8Bb7NceVdYCYHMyDBBxgBjnr8efHbgpZvseMBBoRHaG8irSUzgw2dF3UQUmWPa",
  "key9": "66fNCKxEEy1iKtqZukudLYR5vCsHyrBRRtRVPcemW8F8duSexntRxfTSAGFcAwUFV3pmC75crgdB8md1QxLQRAA7",
  "key10": "3xfVrcZYYdvfLYErEiRtpDdTX6UUPaMsEz4cvdQbaMLPK97nSTCakU9PUQy9a6GXCXFmR66C1vJpUB95WWiBTbjk",
  "key11": "2UYGUa3ierDG3hsozv5cDWWxGkxb5n5mNeahhP9p7RvCvp7ViZxMWGRqdNEnkPoKtntNJpp3Td92uUzbVq7vrsnM",
  "key12": "4HqmuCLh5TU1RKFRJ3uCqxv4Kb2pz4Fahk7e6U3BAj9cLopEsjs1nobsu8NeaLAu38tocLvVYug7pk8C9nnWgvhu",
  "key13": "2ptRcNkv6Jr5ny1fupGjej1HukhbGpgBU493DS6BBZosVLfe3PHA2uk65FceFK6RVHJBAuDqdE6xU8VK6n2bPRpb",
  "key14": "5RdGv2iaAYPoEqomeNtGAJoc8Jo6rQ5E9rgyRgNYvCGeEUqBhMv8Fhd6fquPJAnG9XU51j79poPjDPqcudpPm9wa",
  "key15": "5jrp8Xkgk5aRS2MdvnwvPDyRPVic8nWgq1WbceKmAW2xXnRVUpWAyEV6ZrU2Au6ZEW4BjeaxJWW5Vr1jHWUvKQC1",
  "key16": "4ni9NkfqaR3nC8kPK96DNgiRQ8GBTPVCqNBdRvnMTDCFqoDdoRMYas3h6eJGZHTExZdmcYEfc5s5yavjsrewunUZ",
  "key17": "49g8kSJEyVJsahKjFBTmTdiGq59GPJjcSrR7ZQSmHqzadtf7BVfSS7zcifQABdkKCsEDFKR5CsxNE9o65eoWFfcZ",
  "key18": "2JEJCxw5Fq8oLvCd1g8T76PMec8ncV4SNCS5s6YQkEcyVkDBuHgWxYDgB6PotAf3yaa3LDAvmxe57RSnLyyAs9rY",
  "key19": "2sgL96MAJxoG5HiajURhfQbE6jB4bss9h65bo2T9u8JEvdrY33WytGJyVHxWCN1tKHcdJV2WRW7brEk58DcY5zUJ",
  "key20": "66x9rafKZKsig1gdmKYeb4Z8XkkRii6RTEgAbAjXY2xhacX7jzc9t7FuNnN9BPKxrfhSUH2npn2BnzPicr6NQRrp",
  "key21": "4N6TJgH69PjuPo5TcSDQqaQZoQ5cfUnLfdrrGTrsm89KHVkKovQs4mK1uk2Rjj8iSxjna84MvutzP26orNy6AgqF",
  "key22": "5aVZtbebhRR5paTibHMzUfbxgjDzLcYEDf1YML4eHdFmpEejnNGWCypTCfSob8MAaXrmTPuRJppgn84gBBFcMMd7",
  "key23": "2v3NaLcW7RDd8tEUeUnAkUMh4u1G8BU4VEx6WXJGHzfhtJr8rP55A3QtMFW9BbkU7EESYupmhAf7PwArcJ6cvpwu",
  "key24": "4jtT3cJQpKYnoCHFmGFAUVrU49jcG8vfjAAhqhuRVKELeDqwiYX18kvoDm6TEyf2KyhvAVaW8o7cJWx8iRhQDJ8q",
  "key25": "hcqoAyTSaKD6UdYwdE8CYAZTJk62FuMxHvY3HerFrGXLGeG3ErhrLNqy858e8ewshcajo291iJURF51mGtgDDZR",
  "key26": "2qKBuoFm2yd2VMdG4Cyt4hF3T5WH7VBvmDjueNjsQ8QUsJGCnVfCXVhrqa8gBp6fjtm2dJh8uoroxp9kwMV7uC4u",
  "key27": "5iEuTAJcTDxRVEoyfbABusMfh8dSoeuHnCPc12SKsP2wFJd2E6dzJKfm6L6bi23moF4BjnvDGbgc9ggGf6XTnL8R",
  "key28": "31Hv7JkKRmxMkpDBMp8M9PGBVu9D3K5EJRwRNePTdSNE87Fcysg3c7yTkwseug7Ma7xonNXHgHMDEmeg2tBrjXg4"
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
