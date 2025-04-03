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
    "2YGBEdYvued5tBdknV6eSuHHnFaQ4nLvTwkSVMuoAGeeTq9biPh7UaaYjz4aXTfK6YFLwRum3F7L5HQayGYZ3tjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33SDFW1yugj3HuNWGMXY8QWJi8aVQNK7VxhcoAQGCc9xx2ZxUjiPtrTWasLWgikWYHKgoZjBeKdwXcGbmPFgokug",
  "key1": "3UnMyDifurXAYDf2A3xD5iZhQMB1cJWJhjJtCUoVZpUFQEfS62DLEcm4Y3SVS7zWYaDmdRT6eer4g4yAxiAF9Ggn",
  "key2": "2C6QX35YfCNPf1bdPjZF9twW7ifGJLkhDCUDZQC6oGUU1iQ1N6g9RBFUdFNmU4ECLLRkS7iiUEtsMoouqz2aHGrz",
  "key3": "yzYdnzZAijKadEFyyv2EG15ZpQs2CTEDzKPqkMNxNAuonT25pdHhoYWtj62MktD6fPmWCXxS1dmMYPwXQL9vjyj",
  "key4": "4MLYn7iZRr7LnACBPNHGHCyJFGPJB73CbmxE8Etef7Mn4NvdxHVgUMFoDqwKo6nUL2SvebBH7eg8du7EfLyJLAXh",
  "key5": "4rMMKAti43ZGE5W9yKn2XEEjjdrQzqdPKMi7c7QrLNVXACBUkmRRPorLbethXrcbKEhfhK1SCuqw6WEDjpFHDPP1",
  "key6": "28TUVoAuE3CwDD4LnJafh1HTJiY4XvVKS8HSrajritgk7XS8N6KZZAZT27sD39HB2DGQJP3go4vGa18BX5PgGC5a",
  "key7": "4HZg5V5XhtTeLqtqZpiXzfUX1Gv6JV597KaKMGoEPQdD7LPXR5t6txF4iDHetRk2hAY5omuBJ9shMdu4kiED2mkN",
  "key8": "2e3QfkpxDFmwMeq4ZkRFj2C5rWkwpMx7jUi3PfMqg39t79Ugk6pCV6QpPGKmX6oW1qYHTXGX7mgRVbnDRbDVgt4y",
  "key9": "4Pu6BfaAb4dvah1ZJuN5zPuAcLuLn5qSZAs1WutDdjboQQgZj1PtNmHjTvMrLahceKUgh4xG7pbz5e5iuCySRDUn",
  "key10": "QXfxHEVeDepMr3AX7cnWrq1NKNsLF1UzHg8ktMaUbA3YHJAjCgiiJ2SQoBtN1ShtCzFe7i2uUYxVBsBVaMSMqyY",
  "key11": "4LPdSYpPmacTbd1NyAJ6N1eYw6xLcYvtVL6HmqDr9Wi9HgpiNb2rSqqwSyoDPsyUj37rPZriGegYG427awfmzTTX",
  "key12": "5R97RoZuveez1o3tEezMxnZpEfWWLBf4DUCHh8fVQCCf8YHZgRX2C4s3K5E1Qvk47k44aw3ECmscUrodKgZBvE3C",
  "key13": "2RtEdHdGSsnuH2kXKqRMHraaeBnD7KfAmPHCAm4pLSUbLjB97W58PyJzMmf1FYjkURiKXCJEHHnoTBkUTteDxZJU",
  "key14": "idtH8MNiznr6VXMinxE7jxvgru3Lni4T9nPX7F7ErMXgVbF6JqqcLCnWyi4JxG5SAXUqPyaMP8KTj68WdAGycym",
  "key15": "18XmFbx8s4KiybLa2x9yf7sunj5WjzWpL2SpW6sAjCH1hQFY6hgyfmt44iZ32rCfjhdRkTPG8sKueyo6R9CW3QS",
  "key16": "5zBWWEXZcJZodzR8aqm2JGnFKj7eeMqseuERPvVTFxNafbXRcPYdrF1oLMS576SuMn1vPkrcxYbeReJVphJWWKu4",
  "key17": "3Ya58mhVfsKbyxWoQjp5uB6F2YdgSaq7s9oPaXHdkpthfV9A9Nn6FhV6vtHCga9wLRy5ZT18kuHoJeZh4gjm5Zo",
  "key18": "WAvMNAE4nNUJRmRNvDeXBGoLjSQnYwEW9gySq6qxL5SX3ZQUhaQvvdxVnFWXhuaGy89Ch6ZRLEdcAsz2vMvzdrz",
  "key19": "31x6AjjZfx89J1U6iz1vYY4yRWkL6YPtHGrd5iw6b44Ku4iWXZ1CqefBgLaeMHkSmPr4chdUpmwSyu3CgqZADpwy",
  "key20": "63Noe4Eo7DXMfHKoEee5oNfFgWQJonyeqMeSiapMJd5uSafC17ibroP95EwLdCYABeyGTkUUHxdF8pWao1SDEaDY",
  "key21": "59Lk1L6r4jQ5apcBoLd7FNriUE91jWi7uASMPBG5GAUGBxAe6Y9mavowFc9Y18S1zZjed5WTboeksLL3gdmC1We3",
  "key22": "4Bg5FAQpLbKBFhHF5JYhEzbbitJBAoyHx7qavZLFhSHc8P7GsnMfdQLR3vAgnUQMy77cNCJgbRxySxuSKPHMzMHS",
  "key23": "3dH42qQbbTjCYsiJfazwZBCb8FxcrwESVYWn6i1Bnojd7yfh13e5mvvHzh9gWrwZUKMqpeVXPkE1vk5nWmdQzvJS",
  "key24": "KTsERkF93APQQ7gxc2TBfN8b7Uhm4PSk427rgqJgVdwo4tkWZ8sxxgwqEFvTEm7WBffHmPYVgqRW3hyzKyp8rpp",
  "key25": "LKdaSVk7jJFAnvZ81mTmHNryz31ZVzeU9NeDestsrrN7NAJUcGAWLXqgw1Kr6UQBAZdmb3TkYK7mZyTtBkj5YJQ",
  "key26": "5c7ntPRpc3Ge2CQMWvDCX6ax9nhWaEVrRQ3wx6fNsFdXm2mUDkMDpuMD9tpNoKkfvzLrWe7V8jUBtTLiwTpQdugg",
  "key27": "AeWpkCwBfwLVbUVUDK7YE4G43c7WDe4XQwNzjg1rxtFqFarL6Cf7Lg2FCsJWcgzhNphpQLL5cRaHk54cKozKiEs",
  "key28": "32oca2to3nxQSorymTD2vs3Q8N4DmhXYDFyMWsqf7QGFkZx95w62nYhD5p4V3PNeVo8JtG5VXmfDRpiTVRM4omma",
  "key29": "3DLoevKC7mkG94HtVqEpo9kmB88suNeJr2mqRVXSTCack7YT4WTNu1qP4jv6fkGsLoLAkyGW3SsJhWdVueCUhGWJ"
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
