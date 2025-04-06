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
    "3dMzyy8XLpfxeniysKgXjUNh5ug38zVdpAJyN6dxKeKFa5av6JwB9jAPunCYJUeGZcr7Ynzagi6i6FLKnCa7z5rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gw6ikAd3VYc6C6gF3Q8KaSHhsGPVfKtHLsTRNuUaeAL5vLZXkWYCuuTSzxZWxbndd5ykFdXF7UwGr3L1f6pdBga",
  "key1": "444eSYDYLYgnGcpg1yecjd3C1xjukAMvTMKVCNzjzn2wQR4v6j2qWZyvvHvTQUDxS7dhMRN5px8RyZ9LpcUmH8mf",
  "key2": "4saLvMA9obxsTsoe65SmV4kSVX1HFBhWYzgLgwzBViog4fCjhfY2fetrEfLnJdHzeoJrbd6XiP3R2ukMhEDKH52s",
  "key3": "4MDChyvbFYNr39X9U8VXwQrXyB6uhjcqNX5KXcXWg1sbqw5ZLUEmeaKEScy2t5oaAmnoYCfhNkqg4iAiXAe3fJAT",
  "key4": "2oCqZ8Jf6cRcAHQZ68whedxDtDEfP9cNYGBVbRAH158SaWJkN91ZJteNHkr41fUReVPguTWRdhGJ34dbcXaRbPaX",
  "key5": "5pWAwoVXZm2J35Smkph2PLw6bNM1jCwNPBUsUoJ3o8u22GFeCTEJTGn43ANrnFLDYU6JywFU8LMN3aXhXPCUTTt9",
  "key6": "LQcwV9YZAA1Y5trawMAPrLiWyDSiGN6a3oPWT1kkg7g7aBjbm1AJvMeUZQmoZMNn7dgAGdXryJzvaX15qxA2mFC",
  "key7": "3X5pTFiQawQNVsjv9BSZ8bcEjnMToaNCqbAnwYpBwAhDbRVFiN7ghBCTgaWNLHjjFA9L9iTEmmiudv5makpa9oSg",
  "key8": "4Y32VtEMxR6Ctt87m8iPJgnoaSVYUGBZ4gnk2ijRtv6ScNRtBV9pmbdevcVhXY9rWzMk9NdGLtfkfBAQih2LZsEA",
  "key9": "2eWGmroNVRhpLcrfoFJdbcjwWmF6WE9XdCUCQirfHiKHv6Yr6xiZy6qJPwcSprpeJikSnCHZ3EXzFCQkfzVSR2vM",
  "key10": "3qCnX3JCsjXCcxXa5gAkoYaFVhSmmkKBQ5fKvQy81CcR7ghj72TYJGPmtvEGBcH9CFWnsbgyvCMBzjhYzC44jP5Z",
  "key11": "3L1cNxQ5LSHTy6UqrW7Gys5VP7h5ZjCdEHWsc6xGHQcUuXLydcGWcaZ35rjVP17gPHfQ3KpQk3mX3kGojQgMfwMA",
  "key12": "Jg3SY5J8bzUawvbDxtGbe8cryMmVrrd3uzkNCGbJJSHQkNVGC9dFWMgBmNMSoP52nfVbyvyCvmzGXFCF63gWyMw",
  "key13": "5Nd3CMWSLXLFCtjJBpFnDyCARK1JjETjv2i3op458hF9eXYQPuEVMmkPgdTMj4fvrcjDqgNytWZXCHpSdCee3RTN",
  "key14": "k73wQfiZYzUsKN8BhLDvaPxN91yMFEWKnYAzzRk22iCQRbCD8vgzP7G9fNgEc41mbjnsCkN1PYobyEGjK1CMfyo",
  "key15": "4N5mFeb9JNRLNGB2Uy1MVqavqnzeEeE8rDzVngjdTBRdRYdYyu3dMyNvCyohpux25GqcteAQVojJjnicELdR3A5v",
  "key16": "BCyfGU76cJjEyLyiHjfZ8dPPVMAVzKC75LEwJeT8C4Ya4yN2Rq9DbBhxZyQfkK5Wk5Kb3hNbaRtueUjyTeUQiEw",
  "key17": "3oCyRPNK8HD4p2kHCJpxnHF3n4muXRChzdAqELFApiw3CaVS7wv5HR22LEBsUrnTD4F7FdzemWPm2qBAFZFG8CPV",
  "key18": "5u6KzWHG2J41CTxbVLjeU1zjTCc1L4CWZBwfL4LA6aCQ7EvSoPFhfaLeubY17oZzbJHBKBAL6KBwHmrkz1uUCRzk",
  "key19": "21N4dpMNs5jsaXDLNTqZWn4otmQQjvd9EWHGBn69GxmuE3kdvv3CHr2vv9q3AgL6kFwDr9r32pLv7mdmgbqhzY2b",
  "key20": "5hdTJhC3PHoTbJbSDWnfTNGRWC5ikkFfETFXinBPDy3LWPUqL1Y78L7pdimh5t25ncwquoNXHioM5LTTQWqTdhhb",
  "key21": "5FerXsdtUL8r8nVtz5uDpe9fWn7Gc1FcmdQ9MVLRDQh3gNFzxzA1Fmt1aKVh4wgw6TdkG3UfqMHT3gdGbrCaiR7B",
  "key22": "5M4SmyEbpXNCNSAn5NZYDHioPzNqqfwfHeMnmwSUNiy4nHYZuop1QuQsFf5E5nPE3PqqF1STLQfyikRr7q2EukmF",
  "key23": "3bsg1CHikju1rXvARm4JRWwHSsA5SvsFYg88pky2rXourGkcPUnCsNc9iCaRKQzrEeMYtB5nD9T3Mz477vtW8YNK",
  "key24": "4E2mon8yEjWmKJVVNFNvZwikvcDGUKQgTfU79271VNNaG4iHRX3r4qa9PfnJij9EyD6g3ZUP9WBqh8AS61xmpyBR",
  "key25": "4UiEjTatWrUsoymCPn5T5TCwc2WXf1hr1gkzwRzKEpyM6vMtQr2bAGYe6uBUZTQZK6Wykp8F9Ee33ZcZQr2meu8f",
  "key26": "3kLnXrAiBsZ2KFZGyVqWjVZUsj2rAkZLtdr1hHcw5c8veMnXLcQeurcKXeaCkBBqt9ahAqMtWA9KoESCX1EjkqHS",
  "key27": "2yYDnNT8zqLjq1KBV5Mcn22G6giSGdHCyoMueVNgeNLVKnTKgmit5jQhmczKdGEkymDum7MPohW4mXGayQhZwtAy"
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
