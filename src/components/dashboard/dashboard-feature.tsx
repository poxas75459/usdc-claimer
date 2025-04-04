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
    "2xXBhb9RsmbqJEs37fR6nMT7X3nCS7xbuyL8a75HYU3aCT511AG2NzoBhdNdE6VgTLBTaFgGDwg3xhY7VZGrBrX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "akT7AuC7PvsdcFqnzV2rYiaPahFRcnWQiqAAbQc9dHDZy2Nt4VWqE5GMrvFPDSzEchH6jxruyQdpVgvck6HEbQY",
  "key1": "56BVo4kQYjoeXWy8MJCMpZGtxZQkxtT7jW9HQc2ogdgVB1ZsbaWaYtSYBDP4u9ngrueDAWoRvM3v3eptcN2B342Z",
  "key2": "3JWiBkKM7fX1ZDDKQfKeE61K1qthqaVHbwuQ8dzyjzawsFTCG7b5F87Kw4Sny4EATQwdiXBKZSuoQNDvo2RovrbE",
  "key3": "E5KsquHfGBcYGpUhTK2W4gpS8QuCzq1fsDKzADg2eUzh38WE8LfHRPhE4JhgVMGvoVcXNxZCGyafd3zJnMv7uXn",
  "key4": "cKk2M1iCT8r2NRhEJSm479VEMT9HB1mFBt5EMzZ7tm8aCzT4dfAvkjsxeC9XKZJRbRba1DJUCp7AnARRnm4fa4W",
  "key5": "2cEZnsWayQoSSGFW9fsPb6twzRKwyrL75qtU2wbNCkH4dpSj5DiMr3P27XNTpseQgrqzxrzeMB3JWQZPvrjTEkbK",
  "key6": "4DLkVPAtvEFXd4HSJhxqZqhMaronkMKmLoYfstpWsrUmPJa3ET3hW3BM9tiRqHMS7YahdgwDoXFdUkcSXK5vF8R5",
  "key7": "iayTpgZsZCmfAAjATmVsNET6FQA5tyFUeyHSjLz8Y4k7NT3yUi1XRJgPNR42QYx9FLDsmGRxtsFjghiP5dpA1EM",
  "key8": "3KW1hPisgp7LMuUEJwj8NWtYdzgbVDKeGc25AAfpfEtTyFkMzrAgm4n3gEnAXMdEjL688QnwoNR1hEV6xY9wbH86",
  "key9": "611SJd527HToPPWLy1jReQNmEBuU2SpNM5UuX8QK62oGcuXwopHcbwxdXTaE46Cdt2LL9z7ibM3STtXQZuRemkps",
  "key10": "3m3fv8EPHhQmGmp2oH8bYchCF26Vm7K5xpo4XzQNnesgtV9v1FFR5hZATEsfdWX7MCWrJjEGEcdxsMDZAEmcU9nB",
  "key11": "37uGpuUSBW77q11wwrUhf8G3HyqXcTSN1r1kLuhUqtKyCUcD5CRYyZ8KV3CwGLXhSJooZNCbQ2FyL2Mi3Pz3Qqr9",
  "key12": "55DwvAuh9bvn5aoNmHLR8mpbwWy6KRDnePWo68VeyC4VswsVxn51yg3D3TdRyHU94FPo7qU67DNy7f7F8d5A51u2",
  "key13": "347Mh8qtG7SHcs92d19uce8aQ1AymtdH3cKET5T75ArXXje7PQYSxSfnroej3k7cCB58MLvdX98DzpyWGi2Hvxja",
  "key14": "5M8kimWQUaX9xwgZFcpBTB3xcLfXYh3F4161VzjdGo87Z9aPHMNT1roMoTh7PDgnRZtmV8BpXaV4SmxpRxTawh9S",
  "key15": "2QDKsC4ijhFSkomcPSrG5GbFBFy1oNh9tzsz5FWPDcy5pKaj1YUZtiYE2hubQK7ssYNJqNQAMdDsFNoy7UYEKaAt",
  "key16": "z9KuJRDVUdmvm12a4dRKMCtikRLEUaLH2B5hNU1jz6WSgqdveUmMpk16eFvkDbuM6DPNubdcVoRQktHKxu5dxJ5",
  "key17": "5MBDCuUkXad6Ub5f9bN9RgHUr6HQUNvcvqC6YkZijFtHbRrgdm71Fh9QrJhk3BuZWu9KpGsVcdw2CGDVBJcXcdXd",
  "key18": "5U9T8dYvYyoJF2qknL3cujEyfaWa1aFUN3cXUDPx3i2tJNV9p55MXv9wd9qBu4T6VchosKkQEdv7o4tXr3dXUEBr",
  "key19": "5yZUWzmf95R7KFZqMLYWWqR4DzbZVWd5DFJ34ASfPXdTCQRRwP7hSzp9YdcDtWg9KSPZThW9733RSW1QNKK2XC4o",
  "key20": "41iKi36sWT6dMyBNWt26yUECxHzWjyLjuwYkfyTv7gbcUzWVYtZfs4kyh4v5qeeese2J3CzN2ARFDafGoLA9NRjS",
  "key21": "3cEMBoQh66tgNj42oA8uzqnkWMfMvA79aGkiMFPdQUAZnbAkm889UZpJ1dBuHntpizPcvibQkjL2XmyMY3jSpstS",
  "key22": "2vrTjPJpbzfz1y4UgJo1U4x6jFFMiGN2xYGB5Wcy43EVT6CpAJNiZF1BqwkJLrTyqbBam7q2vnrSbJ61nNTu9uVx",
  "key23": "2jhs7Gk8KJw38kzQzmRg66PkgF9WFYj6frA8Jj1VVzGVARBhcYYtgHRzDZQqXmGzuoLurSrqM8LMeRLwEqJZWAbM",
  "key24": "4kk4EitwkNNCqxHW97ME25QW8KvdXFbbpqUXEEBN6jJzD5NQ2jjJ2t1ogXmazmT1U8tm1aSkfFh3VrG5pC6G9fgm"
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
