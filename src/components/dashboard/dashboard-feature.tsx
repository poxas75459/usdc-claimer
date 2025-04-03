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
    "2U8scezbjkeiu9HuCFu5pYgakc43HSAfoN5TDUAq64pMTWS9pwK5erMstAeveu9UQPk1kSPH7u5ngjWREsqXityE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CVXSGSvPhL9AfZeVnJj9iV7UuRYSKRFYynbxxmJ7DPW6js1kXKhCnLfeA6t87P9J1DXBoLsqToBaqvuGUGDzGjC",
  "key1": "3W8yH5UJP7v4pdiCyRkGHpVYnMcYzZBZQWhSNrBeycR9LBpwGW7T5isVHbYUPpjcA9UVUZZM1gvbLAgoQ3mJ3pW3",
  "key2": "41BKpyE7FNVm4Y5m5B7SaUrVEhbcML97dRwBZ8xZA7rQ4R8SxetRp3ifyTmtiCZVwWVKxXtWMRqpoFpANwCaD3At",
  "key3": "5Z8EcPETXoVFrW9VKW9pYvF5xxzAopa9Ycqjg38QzAH9Jgnqg3Cm13qCwZPoK2NkRQ73XXCZije6KHhaSVDd5zUB",
  "key4": "39JAbmk8TehomaN9AAAqSdhFpqMbiP6YuoneSDNp4WSMiDU3rpzLP9d9PkBJy9P1HmHoYaZRCsriQG3tWyc6jczK",
  "key5": "65BDtB31UT5cdLJvxHSb8w2eLoAhzpqCTiFNtHc4zvmFZVJR1FQrmCmNju4CHuubtadTmzgfnyKbdFuKjwiV6439",
  "key6": "2ccWErZMRDvaqHrH2FXygGS1No73d5AdCFCESV2etXEszxAebG1UF3ZX2rFXTU46R5PyixmMhGH3RS9nDW2hhfdr",
  "key7": "fNJP2bLY4523d44bSZizuhKxdBV6s9BKYXoAP7zKu12AsM2stpstWQooFegsPmjKnm1vX6UhzQapZeQxLZe76Va",
  "key8": "2Yw3nTZKBtjbuvicDfocv3tCyNgTAtLbCENDXFV9DAkKzKwfrWmLWfvyxSEnmYeAcjHevq6ssa2VFLAMJRth2g62",
  "key9": "2yzJQfDXMkHjH5Sm6UXFsFeKBSQMm7UaV9CiGmpXRLG94Lqmh1QJ3uCTp9afFD5LRZyhmmxFYLAnFMx1j41PsSzd",
  "key10": "3cv1ppKUKjhDzTjjvvjknxkiLLM8r3nbxoyy13VoUPYXXxK5MuhKjFPeoANbrTPQ7REW3mcohFEHznbWmA3t26Aj",
  "key11": "LGDYQFCBHyuHLUqvTXCp2sEgj25DbdYK2FzgNQWj2W8nxEFqhGaVgsCSoWdUq6nvW1kbNJ6yppqr9poqx18g245",
  "key12": "48zSqUzGht9yQK3NYxYa3geeypeJTg7FygsGsVVr9GVE9LqKbsFyJjH959UEdDSgnvcbiD1LnMExXqJP4ZzaJ9B4",
  "key13": "ZUigaV6pvxS8TqPjBwmHh1q3uwg9T9KwTs8jViCDdrpm5zdwGBgYFm7hhNqURXDisDfa8oLkoxjASYUwUayENEq",
  "key14": "4gGMUmLyc9CtWDN9oHZWjHLDe5D7h1JRFgyaKJk7ohCfeY8L8cXuvoj2ztjFAUnxjDn1eZJTiHwYxVbcwbXjk1Vm",
  "key15": "3BChRkaTzSdAdgBsAYbSGHDKi2BB26dtM4pcz2F8vhYs53Ay1Wg4Jc4ariafxMMJmrEuViRb4wdkaKL9cmxNmdz",
  "key16": "5ZgtiY5EGrivDisFrWqETM7sTAKyNuYmkeq4wLNJFKXrLcUbzUxggDRQwggqcpFk3jRVsysGQ96d3KzXHp5EoEd",
  "key17": "ww9VwjH75CFsyBjredgHzinNVLbTxHbKfMvwKpS4hDuQoaq95DZZn5aLJGvFAktDdCMesX3HzNKSjRi9d3U3asC",
  "key18": "5yFRNruxhrwMd4zntTc6XRcWDZ2tr2AdNPCYx9ViCSYuxsRWE7PoxF3MakJAhZY9kWmqwMfaXLWTAK6LonKgTctC",
  "key19": "JKi18Mj79Uj8ZdYQakeMWPjkvBeJLRR4tPgigfmRoFvozVp8RJA2tny2pyX7RKirAH2nVic4dEHDJciiXY4stGM",
  "key20": "Ymu64N3bvMBLxa274w4MwvDK6Qh2uCxfqt9Lb7o3wFdr3yJydWdvP97szpaNwBGWo6xhypFFZuP9q7qUc79pqE4",
  "key21": "35YMBfmKbLoTqZr6DyrH72BE3HLD9wh8seEa1X6inZJhBHShDqDYSETbuyBzJbb9YRp4cSKpKdrd6sUXmEttZYeL",
  "key22": "2RQhVrx1bcQVMjFvujXnnY98kX6tkjYb3cTvhyr2XS3Lynj38wx5ietyNFdMPjHJRmikoznGoF42Wakk3NVUDNLe",
  "key23": "57Haf445PkqYpV1PeUkCYuDVNiNDeofVFW7nmuSdtuVFzzrzcrWcexQAjjPBfnbcnELekGPh3Z7XGytfB3s64zPk",
  "key24": "2pjfNmDPjGoEw9DKSvbBc5oP3t23vn3kHh1eYu6pkj5AELAVa9nDmTt3WG98wbwD17cqdCidxzJ3N63E9CEawntY",
  "key25": "4qK3FkbKNbrdA9r3AXvzZVkrKbzJoQhR1aLs9jVomGrXEB9Q4YfDuq5hMp9FXTZ2VEjiEsM2y6qjxQQU5K9Hkmav"
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
