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
    "WdudfkAcXUTPriw6gMFn8D3JC7EXJJCgtnPrqFEUS714AfWyXy1uCjpzaebYCykCpJAxVQCEZkpyrFzAX9dBfMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42bDquFf89tcb3P8CiZuyVEpXQ2ubVzD1PgZDa3F78NBRiMbgwFpqXQhTQygSTGFpYyoKi7QQzyXKzFej2EwBGXz",
  "key1": "5pYz2zX6Y42Z4N9BkKhJfdA8CEomc4qW81yJt4S1rC9trqU3fCYyMrJATDEYbwpb6mHrtThThwaLszZbUanSruum",
  "key2": "dKUTugqTqdAEbuLrSpB5EtErnZJCmYAc4p59HitkaffqdCEjS8Pot5KLJNnXgDABbW1EHKPReUPSuiKytPKpyDr",
  "key3": "56Vg9i9rDccS8m9TuFRtfhyasiv1kpuLZSMkEzM6oKGPcdn1bFvyR5iejcpPBfiLb4kZf8wwvvHybSmmH78JKxot",
  "key4": "38tDB3Bk57EzqBV2pNtPb9SHTxzFLH4fmYFrKce7Va5v2R8aLEbhoq7dHXZ4C251uSU2iVJTJfsJNV6yjaSQqQoh",
  "key5": "3DY3NpcsrZEohw1CyU2D935tPQURcXdTC5hHupwtZ6PYauQ8jBSFtgVra31H89uvkiG4fB2Uv4MxLPzK3NM4mjFX",
  "key6": "4KXQZR3SG1xg4jfTPjE4TeJJ8yFuQH2Y5f9phN3f699UDBU46ZcZvHpkfnEz8UyXfASok9K2bg1yCjf8DqfWKEQV",
  "key7": "1TxnPH4BaCijzFCKzLwZAFaFNycp9qkpHzT3vG9gF24EF6EzfJUZDNn1rhtntRB4cGCSTDcZQTVfT87SUDfT5qE",
  "key8": "2UF2swjJ5vVLkqansAywZsKb3dAph9s286qDYBbLvnmWJrPWkRrpwtcCGdw7bV6c8q2EW2yFnyKNqkPe4As1WeJ1",
  "key9": "61TkiumFH2FBb9duXFHN2h136dahcrsDF8gQx5SBH1fxhmkXBTeWe8RgbaD1SpErzjdEwegWc664qaV2WNy7SqZ",
  "key10": "3NEVRZ6cdBatUarM5Ec7nLHLfg2roGPW87KiRCcqnMfGKdn5FvScx4dcYwS7yEP7QM4t3gqz2cjDd2EMrLjpGYsd",
  "key11": "3w2JmMzABkEgDf63HEo9KV8ETzCj2BXB2u5bd3GcnGY9KBh2oL3QUDVobJq91HeVytRitNJ2oJfozWQR9Cr7LHkv",
  "key12": "3i8XdgETYYFauTLukqGk2ifN4pW2F48CEoJugs3gsfuVD3UBiCnYhxh927ChN7hTko294ATACx2VtD4iJJi6Aw2g",
  "key13": "2Rw2mXuJdsrVDqJ3oKEbE1stvUxmrXPbm1Y6NsUk15gfjfB5VF4TBWTtaVpntXVMnmB3rJ1QRoAgfkfSgjCEJZ68",
  "key14": "S3V9LC9KPArG4Ekj1dY73LS1S2zxmUjJVfVxjiMT6DhB7DTfDNb1uS97pv42EgpciBeWetp1ysoXPgni5dcZX1f",
  "key15": "5GWVuMnKEAZP5VHphoW7cJnTo3yVhQGddrR9ow7ho7Ht2f7LYxKpkA9QCshe5cEddVTNL75ABdK8oXR7TyKyZwUo",
  "key16": "3FVEb6jwSKDsPrNJVnMyew95H3LFc4gSoDvwJApJzTgCBCvC5YFP5e4KQV87iSYxojYANX7iksnNErtBy9dTHHY1",
  "key17": "5jq2M22Asc8skTG2K5xcgwqkLHRsyv2BJCpzwmd8TBKuf6xtbJL6LH7RfwtVjeAcoRWb2MJrdTQrLzNBP2PPJH8R",
  "key18": "FmpBK92sWk2LYJcvT81upJWsxiwH6AFmYEBEDLT9uqSn7a89Pg1h32AjcBJNX2Ljavwis46gdFkM1uDNkutpkHw",
  "key19": "2Yshr68nHLss4XuzxSzExg5q8x5yJakozzw43G6oiA368mh7Ae6VaVgiD1mFqPnsFRupyxoqhrHEeGJhBwSPMUMh",
  "key20": "RWoiWY35zvq5VbhpHrs9MfD2wvUjxtqesWf4iY6X6mG47Roa2ap9h4wbSc18U4DJs6J9tLiykmNWki9HwVP6inA",
  "key21": "4SYEVp6DNA3mVc3YzdeicHerUpWNV4ijeB5GEaUtHp12dGujFvtXAZjm3cr1i3LfefRpH1LXB5oypB6f7ZhzZHS4",
  "key22": "9h8QtVeecvpos6pkUnr2SPJZajEEPHWUWnsSJWB5nFyRVF5t7ztTeCCsNmZk1PXcytaU3QPU6m6GjzjEHo6WkGQ",
  "key23": "58oNYgt7CAMvtpR2bmYUxRCN8KYgsHH1PT5MNtTQaQv6suyZ6hcJXSZVQjFYhiyoP6hVs2D6AdUSF2E6HZQ3JjKu",
  "key24": "AKcmhanRYTLSvZSjDKecfrLHzxoXTfddJ2C1xFWuGJpo4x89y1ASqkbANR1sc9RfKhQnTh4XdiefCCDnzsuAvQa",
  "key25": "DyouAVHFdeR9tYCMGbhMK5aPBDmf7ci6pUGCm3uN7nV7oDH8itGsoJsnw5wDJ1FZUghk28WywjPmGgs1frnvgdP",
  "key26": "3xjcemw4iaE3qnHbNAY1ar1EzPveRDHiMPUga4ZE2aEi9tkiZM9z5eK5zr8mpqKGnU47W3Z9rjG3hwbwMmdXqcch",
  "key27": "AB4DoN54Lrztfijk6rixu4sduFYMQ2EvQ8QZQmgQ3w1iK81cVPcE6imESqKoUiB7mbApWdQiDnuzRzqKgyFEq9Z",
  "key28": "3bunXxSiXhveYSSGtMbKRh3VHZKnFFYUUqk7vVNc2p17wUqHkp3W5StTror1hzzAEQ7tUfEAnkAkFfPqdwvXZzVx",
  "key29": "2r17Hf7w5seucnewb2rcxNAvSra7wM8ZZSnTa2giv7dadTbc2P9p87FcdgGAtQgP5ZkAN6QQUenG3Cu5LTHsvSEB",
  "key30": "2VpVumq4gVs2mBfEWuuRV31pu7TPKTJ4rohkYJTWsKXnLGEVRirpQ9gSVVyP3D2khNnsJQkiRfSnLqwzNErQeYMh",
  "key31": "4AUdaX9msEw6ndbjYqSMurPrm9qes2q3oCQWV6xB5bNLXVs2ViJ4VZ9YZXRuHvjRUjjubFA9hMijGT3c2cU321wh",
  "key32": "FKpNWf9Vn3p9WtPiBe93Pcip1G5cRzLo81Jxtg7wDoNafrti7bqn4cFbdSYobVKeCiyeNHh9DQcUokdmsotucid",
  "key33": "2YRPpZURP2aq4vx76EuY8hcxw8AaBxCMhcEe27tU3CEWA3vaJpBWBokfjmGjxZCrGZ1TRK4ofojXshyFobVJA7fi",
  "key34": "3ix5uPxHV3umGf8iH41XR3sq2VsdEr814uF4bD1eTsVBNWZvxv59d2FpC8jc1ZEARaaY7GqnakjTzpG8f1udFdu2",
  "key35": "3EaPUNxv5vDWUv2R7BUUvaq46r4wdoYZrFAs8jyowNyupYQUFozYBk8w7RUM7K87XiJK91VRitUaBVjeaKk94SPe"
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
