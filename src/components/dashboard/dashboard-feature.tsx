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
    "3eksXdXgBRGVMKwW1Wd2ErGdj8mkgjK229ujDGrtpZWusWTAGgasEAXCG4URQ7iQ3M7i5eQgKqbKdRvgDgqkwxv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26N3Wd5dMtiRLDfqvpv3hHTi9mthTrBbk3fHgkkwpobUvCDJUsejgbXknuuUtmF2ywNUtCqkkoeyCND7BpXzitdc",
  "key1": "2pp16PStSijnLsr4MjB4M867NCtn94VdQFYmFJ8n4D8xvdySAcmXFeqs4A1EPpdSoy4EA4PWQz83174LaGNMHi9n",
  "key2": "3FMD4EZUioeLweLH5MEMZDABa95WsWiXfDV3exB57kvDp4QssZ92ANDj7KW6PxXEqX6s4jB9q7yxyQHYUfzNyf52",
  "key3": "47e9ux5iVf7WALTZniSR9gKD3QaaDci2p9sUeS7VvrNdywG9agiHgPBWnHjS4RmaHTJXbqdztYWzpjtLQ5mJjd6U",
  "key4": "63mb92dRnzAh51px9G2Jzu13Fni3tjcR1v4zKw9ks8iFujzU8j1z8CiumQ59H337yqLpgi6p12Hh7MAU5zcTvq5P",
  "key5": "5uGEzWRQEcYS2mrDCNYDZHxf7FujrXonKMTdfX1jgGVHZrFauwNFPNc4HtZ9UchBjudwegiJGPBtWjEVwLQjvRvt",
  "key6": "5SrEj31npH8W8z9d5QexEKuiyBodaAPTbdS9NEmGLTp53JfRP7CfemhrnD5QSrGgqZuaD9d88RtHg12QZMw73S5Y",
  "key7": "5LxbFKnP3K9pTn1WPkZcZqRpK4UeujeYxZVY72oo7QkYuGmusfp6oqELzs9kJRa9A18DDeEoUuijXbAPR8ThgBPw",
  "key8": "4iNY8mtm3LZuqHyyFXieLEfNF7QZSNWTfUitDkYJL7A59vMQePiVVbYARKgjNB7QifufGjL9ck5eqoDU5tPEUuM2",
  "key9": "3kLFhFRNvuNY3oLURutDLteTLajugLG8ypd8VeeZ5SDQAubmpuqxWrHsghNRagVtsJbxCP2K54b14dDYSHNpSF6G",
  "key10": "3N4dqb2C54BgLQH4RjUXEDF755LcWcvYa2E39whMYCbbZYE6u6kP3SLNjKFED59sSao4Zwa78W5SUDNLSChy2fwP",
  "key11": "2AcNH5JaCLVUGVLn3RxU2qHB6JBqWUjtHDKioBRw461bmicfUmeXET256ZouBRtSFi5H6ubgjKVHTG9Jdb1g4Ryt",
  "key12": "4zrh7tL7VF2BzEX42XQgEDzWyDuSSiw6E3MeNcyD9zPPzjvxQiS6crLEJFc7uqLgU4L98C8RkLHceksqzTzeyKzH",
  "key13": "3p5xdvLpEbUB2VMzZWWycG7nSw9shyhXfKym91vLobXJSA9RxL5Po5tkt4kKSY7VSyUxT74N7bqDVRX4BWXgLaf6",
  "key14": "2gDeJLVvA4iosEvoVcWBemhNNKUwhap8v1MX3gBBT6UD5HULc5REWPex7qckjPxz1KHStwYLeJwWLqeDLKNZERfA",
  "key15": "5UVqe8H9hRX1MApC5ybD2PA6XaxWwJWnc2s3cajam2defKC6K4bAdMx4XMzANuVWRgjwGbFQszj37fNXDjohhXMu",
  "key16": "3nZdocq5WtFN9bDBESkuH553iMkxPPyDdphxLD3AXVnEgYyf6HqpWbdYp7fmZxzJ654JGBBC5sRPcRgdEvXGEeuL",
  "key17": "4Qt3RhtXNAsAzqXLzVsmUEHEYdRPVrMnB4oPSBXNAabM9dpBGgKnm52fEk6pw7LMdp9pZmWNPoNGPeMmMhUgXQZv",
  "key18": "2CsP9q1UEBfrWYm2ea4LjdvB7SHmsVUm1Xwf7EwYwffVnFViPsVKywUi8GvP8v6s9wqjCQaNshtc6sTmWkHWmsjE",
  "key19": "39PgDwsgqaK2H8tFgDtpYYrcV6hSCbamKoVo36LHjyzfzkJmoRSmSQJsWhRypEHDXceCpMthAbtv4Fk98f6tfK3v",
  "key20": "5inFAnZgFzL6rejjkVrhgXwENGo3vQhtcgutBy2oiwvGnJMFrZ6s1SYCAzmR942T2omkex5Bmj18fDs98jXd1twi",
  "key21": "4Hzu4tuqC44cgCQxa2KhfgU6d2aSRpJ28bDB8LCUNh6xtBd8o7zPgmiSULebqWJV1D8XfQGZKSdwLU2EpngXh4Za",
  "key22": "4eRH6MdZtpeYcW3wHnVm5ti8rRNeTSb6JHA5ECpD9dPoSs3DMUgFPr5GFKpgRLWqd8s5HCVWu1sy5tn63q7BrP7u",
  "key23": "3RhTwV4NCdhV13XZy5bSJXBTU5qUDo13MFDVBNbqj6i7U87shiT2g99wVEVtu1LLL9H6ZvLSCFNe4CWLKyVSp1MH",
  "key24": "5SRLPHUzs3x54AgNwqfw2NNV3SCc4hjTnuPmtbqddJmNc5FYbSaVCh6PCszRU5hTy4zvcJYLU6SbE5UZU13N8tbw",
  "key25": "4FZuxue9q3qquVWf4JyiBHZJNpv7hEqZpvdNJx2CvFFLTRMmeeKn6p6f3X29u14WMQVHFRneidvAqj6DVCPSoamz",
  "key26": "4952K6uTYYjQ7Ah4L6xRpAiVYtStM59KhWMhDDFomL7dA5WxPor5wbJzxQPTpARqUfLaW5NL3aHJbo7kbUb6QENC",
  "key27": "5PE3CEuwFHEnrLjjZsXopLjYqtKvNDyRV81abCTdCu4T7mFL9X7tT8k8HnJcEtp5LGWuwpW4YySyjxb2komf7HVN",
  "key28": "riPkS2kn1HBSgcCTYuyPhFhTgK99cfLghopxMsGoyiwAopptnAnpBjPcnvmfFkt3YtPWGawDMFsHkUTkYoh1TPg",
  "key29": "JB145Htdp92KEMqujzaxABxUAghia7VpfRNhcfmC1QnET5vs78Lz1VjPD2DsVHx6hoA36hYNsnz784dKzDaDELb",
  "key30": "XmJuHJ1dj6stDpCa1mtFkWSVvSoMJT7P2HZ8pvRDQAPKjwE43xb4R32noKJaubLXnaD9LhzdDSN2iHokR7xfzbj",
  "key31": "jZ5qAK2rRQ2f6YYezuqzyd9hBPkFBraYY9BiE8LjF9HBQeFc6SLw6Qomg37WtWXDwmuR26S491LFApgPktmU4JG",
  "key32": "2oVCvstj49nyagJJv491kHpPQshF6m3viXcCS8k5AnjhhKdb2cUhjSK3gzFeEj4GtQEUbC4pfWo1rXbWRAZ3BTnR",
  "key33": "5FmSFoYwayXi37rUJto6esks5iLZJP5wQeq26iydEDvaGCvCJyaouCPwDuRFZ3mBGBVnAC1wGes1TpQjWCUCNWBF",
  "key34": "5jWsgRAx6kvVE9WmzoSihxSrVbia3BNoSrwqUw8yAP4YRpJQFis26E9AHbceKeVg7bjpEYERQh75qaEACoJmdENM",
  "key35": "2QyKbdRvYSQi5z3FCknns6oo8Mix11EP7JP3XBgVzCEA4GXkxNTCfJKKacRcZaDQPMiTJtsv9FRDpVjrDx5PHT7X"
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
