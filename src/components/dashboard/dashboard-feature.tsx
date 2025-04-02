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
    "2hyiRdxYUrR2x5b1Eoe6Xxqb3oqStKT9NSb1HdRz1bBQiAL2E5FkMaqf9JteEZTjW5xBeqUUhukajrURz2tTqYtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CtEg5nob4HVMGd2a14rg2CRrXWYg3aMintFQAtB8LAXYdw7XjwMuZUuZbnj8dM9z4RaYeoLWasGHNCziUYghFnn",
  "key1": "34WN2C8SJ34NyjGXe4pUZyGYm3mWhFU8eFm42WHMZrDzm6P7qVCHiRuAQAWFtrY7FfYRsDQjYtNjZ4onyPFdrk3e",
  "key2": "2w12wWrbmafLSWXWNmdHpTC5n8tiKSU7JRnX4WXrQX8nJSbeLALS8GY72Hnz2uEs7zjDMu3816qYKr46mqrEVh7i",
  "key3": "4MPEvaYbGhS3uXkdji3XgYXNUzoKHr6868kByQES8qrTfZ4Kth18KKgYi816AFQWtVXK7t73r8pxEqapy1tLCFs6",
  "key4": "2gDrqdwK62LgNSuncssrkWf5ePM4WBUVif75K5NbydBvasfBanryfvNSmVUgAMmxmL6dAd3TnNYMogJ8k1aaWLtb",
  "key5": "6rtAU2vpSy2aatXNzjyvaJAXUP1brZBYQ3BiTojxGD7TLKG7ryfUeEUDuTzdUjHVoqpP2j7SYGJG6ek7mCHdrdn",
  "key6": "4nWxsyPsgJjJoGb596YVjDcPgqCvgrygtE4Ff27rZNf2Yn2gF7YGqCwbxX77kTynkathoGrDfa6S2GduJFsS5D7D",
  "key7": "39MkLfkBEEZGNhAhFhnxrkHcgx2B3wa5K9AFs4jUHW6aSrg9BpB8PNprh9vefDWmpzDU2cbCwSPzG1K42jNkbC3z",
  "key8": "2UjZTxfjAjwJfifsU1nZsyjWDE1a8ZKGuBX4GaLqnLYypLwZWT1drBQ7ic4ZEnTfCndd9BUG7Hdzszo7rr1vjFyy",
  "key9": "21vXQZbiGmwSGyW6edQ99r2h1WZgQnHyuddgdnhbFykZ8tKfc7AJaA9fJth8aP1Wio4ZJjRWHZmEiKrL3RnKruD3",
  "key10": "3HX8HrLsNSScnKcL5ePdeoPA1PL7PYpujRveYzsvP9kaJxC88PKafaFENB48kJLnMtCX2UMcvWb8EwLD7mVQb9At",
  "key11": "5UuE1gCtxu1w3zvJXJfSAzJfUjsJk7NHFnBuX1YUKckB7ddn8vxsvTxPvWgoqm1Do6T2R4NP9YiwotfaK1dmfJFj",
  "key12": "43ummxe4BYHLi8aveuhpM1R7JRaeEQtwUuPTDqJcqqEBYHGRunjBqWhbDQGQwjFSuCoPirLyx1Ewgq6CXQQphdAA",
  "key13": "21gV8zaKEjLom6iwnHvcf4KQEG47Do81DgrFtx2GcpECRryuTx6xy6TDuCSv44QkwmnTihYrrFRBkiZt7GiVY816",
  "key14": "4n1j2YusXvspnNJjCa1N8Xtt9Coz7nPZ6SK32Burtm4kVLSWL5JrS3tHf9MXEut3yXcFbRdKoPC8cur6HBpDrjwL",
  "key15": "5TtjhBwJPeaB9NJUu6obgNbUu1ehLjWaXv7bKnnYubvbNoEo8T5fmBtSzJ4yjK74sutjM9kedwaKC9CcFoyBjZSp",
  "key16": "3w5WRrW1H4zQoS6GKX7HgNgYbFRUZni3sdJCco6fnSpz5PHwjSncv5ErSSTBLSroNZxZHEBSNg5KgNYCsEtvLpKc",
  "key17": "4qaKeuZiH4Y5FEnpzxdiwnUtgD7tnxxB1SzQ4YxgHCD6763zRn1SyNFQx7dYwdM3BG5FVbe3jg2ENzWzgVPCfDy",
  "key18": "4YgNYBgTqNrAjUNQw5Y66i6ZJEfWFyezUajiLRdrZhijpvfjpJcmnJfRvvrLTgSXznVtN5yzrxf1c6VemsVZBFTy",
  "key19": "JXebuF8JDq9cpPD6ErFaeuuwMCbm1h9GdGfrV6VaW3MzEjYkZU33StC4w2HEoNBknBCAM5EEytuNQash6pW3caz",
  "key20": "3chifuSQjpYzZh6mw2rpM94szy28zNTGkAYNtZjqXiwdMegtgzUS8kSRWDoiEzzqxZSbYFZXsxZsyCvPfetTN26J",
  "key21": "5StV6KEGb3tna8Whcbn4r2iCmNs93ZmTRwFZqbjYe8wXEUejeBS6ZDPLq8eWxwaK4EuJD9AKJYo7ZuzyTat81Vej",
  "key22": "ftqS9vCoN38C4LJLbhWK7Vxj5UERDxYpkPCXtLCqVStynQkcXz1Ws3Fp3u3YKC5gqbZeEGT6EfxReZHnBoBHjYB",
  "key23": "3EnA8qFDxALtZDywCXToP6vyumo1YhDnhNEeKwb4pcXGfqi6th7pxZEDBgPfyaXmEFzDccDpWDYjVYRzLxr5Lnkk",
  "key24": "D2grtVMVa31EPCVpYxwtpAJHF3VdnFSbcUum4VjfJXrZU24K87GSE2wWFTA7o2B5kuqj67hcpsHdXSBLpDf7AoW"
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
