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
    "2RvtvbRCfTjCXE45CS2MhKHtnVCf2s7aa6ft9CwZBJrM4i7VZEqmSqJUmUv1hGPt2A7Mpq3xeyrzbCk3rip6rz1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gj8a6V3AfAtnBtHSkdrtkHP1WLNxyietkfo7Y2um9e6hHDVwUwCDJCFXFeP7WxsTQqLQmcRdyZN4Axsa3fzfNut",
  "key1": "3bXvKKx9gooD4tF7r6xqfqE1Cj7BkRRpBzBVaSwcicMfdvs8pPniUiQBEoFRHLMX4PDGrTvK3f5TMQc27HKXprBU",
  "key2": "5HJ59RZNZCCWA3shBRsZT4Yuizy8zdENMPD71SKWreAE6onPf8SnJcNC9wfWfkADqsDPnzdHkfFPMcb92PA3v31V",
  "key3": "4wcxLHLegoAMHBeTAx3ZjF51aKihjvwvX8b3vvwx9BwS3MzTBQri7wGh2B5ZPHe2PiHonQgs7kYQ9z66zzTunkQF",
  "key4": "3Ac93DPBzE6rv8d2uXb92UuTZvR3f1SR5REZ9UT4P17brog9xqHn14e4R8KpffPe6Nd3iWX1G7gDHcvGNMkowW38",
  "key5": "37iYDZy4dVZK4RRoJAZ35CmHNuuzzhd7iSx4fXcn1V8UVKPEkzrFZyfAUpyxFF2b6SkK6wXA8eaZQgfkfgBqYo8X",
  "key6": "3Hmojj9ucsGFJKESUA2pWtpeq85fHDP3mRfrkwBVLwBm7jLY2NJAQLZoFbbrujniqDqwDAsjodAsDsgxyAjvHn46",
  "key7": "3kFzsfyogUEvz34svvURPpuXPigM5kWeSE3cPHYuf5EuQgUTLxDBzfPYh4LqwUfVbsKnoCennKSskaRTQA1PHahJ",
  "key8": "3nzCVBsX2cVtKrzVNhqPeKxEHB7aN7VcLyEQZycQPwwkno4AuCca3yuPDQjXaq8Ev9gCbZKhcdkUNbRRdyz8nKaw",
  "key9": "GQot6SvXrjEttPTcEtbUZVQH28925C9h66gDtzSKrucpG4Eq7LJxwmpd3acQLCHupzusQa7hRCctErBwRmFTVUB",
  "key10": "39pSdZCCRzy5kn2fYre2DCC1vP4LisrUX7JXkozxGPPcfgF1izPkwJ1Ap8GZBQKEmepcr8LQpmM7Lb49PL9BC88e",
  "key11": "4LFUja8WnLJMSg1iLGGxTkVBu52oQje5LCw3Kt6L8PevbAwt8uqDkjp8fRe6pwRfm2EwMRqqm6njEwajNsQwBXDH",
  "key12": "41Rdvn4LNURJdcYEBKKkEyeprU3pLptrVS3r3tSou5XTv8j61UaA9mUZtcRo6NWmKZw1K8nNxRDFm2pziH8qH4Cg",
  "key13": "5YfCCKYQJMNnBc9iEFDKvzajKYmKtGADPmM1oPMU9FGueTz78qWyV9uvWVexWSqbyhGf1Q78DvNMpSsDVd2kscxe",
  "key14": "ahscwfFBqyPu1zeNSLGJpycZAvcTnrB9ajfvEUB6JtN7bhPCovTQNc2EHcBJ9giD46ZeFy53VfsfpEwQ8veEJzt",
  "key15": "Ku2oG6Ao1BTsT8VkzUc1GQRQsRf2nm4icmTMrugMxvfA3LbXLBfWXRVeR61LQahWzMEHtYfRGKHXpke36N7s6hR",
  "key16": "LgmDA8dc7wguh2r5vj3hZmhYkKZgr1bWseZZufVRhuB9P4nviUhbVEKtK8X11M4jxiF5w1UhvFoF9a3PWFpy9Vh",
  "key17": "bBqAasyJVjLzTpzyuQjQxhangwzTmqgRVFk6qbb6DDHH774QNUUQR6t9RwznXVe3ViUZq4gmZrxEJYC4VH3wWiW",
  "key18": "4UuD4hT4XdKXQYhD7gjKDnh7MJvjfFod5DgUzKQdyTLUPwvdxfMwHkmfkzBW8KX9CmsAtD3vFfGyP89hFnh68PnL",
  "key19": "3m2mYAh4JdkSP6c38JH4qbniPkGBwuGY23dgoE2qdmXRYGsSswa7vVusuWLG2pHnuRr8nKaBqDcAvmPxTApDpboM",
  "key20": "3NJEzFdtNrRtVsVg5JroC6yz27avusYMMKiKc2H8VurPtkJFdArZSBtrBKZ2YuMX74C5vs4qub3gL5CV8h6pFv8",
  "key21": "acYD6MwCHreusNrRuexFNWygi2L75HVtqZRj1q1W4FRdJ4JMsxEAEQAtLFZcfgF32ezfKmBvyoQzVUrHC5BAJob",
  "key22": "31WxKgje1GK2FSZg3ar8oJwoo78a1JPGXroytkqfJewm2sAQRA2Csk5RKjPxTXWmZ7rC62DLH8FjRbz1i23m6tBg",
  "key23": "GyuWsrY17awHt5T4JrZ2jduKxR3VwPTryvFa1QuzrU6wmNuooARLmbX9zMAttrZpUdMEWvXLmU1gYnKQao9d6VE",
  "key24": "4Ax5izK9C4SgLJFqxZx8EK2NoEyeYBmN7nrRwrx1oLdD9keNDNcKUnp5E5UqxJCf6SFMCZJvFT8EELLF2WVwboTs"
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
