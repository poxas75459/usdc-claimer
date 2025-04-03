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
    "46yieHsRioNn6CKN2G3smYeqo8dMFDd313U2jJ4wwVGEqma4JyocUYzHHd7qFLDxQd4rVcSftd6rJbfmmwjyWCPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hiLKUE2GTobLHXbEXieai8dY6Dzmnt5qX9e47Le3HKn7R2gs14ua54h7PjBfX6VDHQWNiBhPDRVRWPHGFz2ik8B",
  "key1": "3wP8V4US9bZuQAL9YmqEtd4hfaRk4QbnSA3i3X2VsEV77W9XWE513uxtFdf6kHWHjy8oCm5ssGgs6Po8wen9rw3t",
  "key2": "5DX7heMtsPrdatpKN5eNbcFQW6dgN5KeEF5YEurjjKnmLuReVpfNoiYLStfqJKgXWDZJXwRXcp8wpyffPR4YBRhs",
  "key3": "3Y7eH1NxeMyWTMrv7mbqRZ5Qb5CsSCXRESegDdg32YeEdzfA1FtRU3vYaDprGkHXhYwxXMwzeciafaX6mMFQ66vx",
  "key4": "3TMHL6Bfa9xXBsj4dZa9r8YmDxotaHeJDFbhPRQyUJWJ5aYcgFTjsdTNWfoJyn14ATsvmrxuCCmAMHZzHAHTxuc9",
  "key5": "4LcS44hUK6FefLB5yRe2QQA4DviuYsT5fybdSKpxuETY3uUroGWwAJx67yGoafnbJsAU1yQC1KiqhPMUEmAHfEdB",
  "key6": "5uh7nZAkVBEvyktkW5rX1aQBcVbw5oN8JWfvEqMN7Yg6KpWcoA1SBoasQYuvQi92LLbbnF2MA6subxBkmHeRnWbj",
  "key7": "3CHG1mFJHA2hHSrLFoEyAqrjMAQEVmoK4ReJCc5wMYT9vbWwoPEGYLPygUzAPdEv3sLANjUZRZr526xPnA4WgaKg",
  "key8": "5WaYtHporM6xnEnWxM8NAa2ZtrYfywcABvdanDNJkdTg69JrTaA6e2b3qKn9tCrwPgGYfFeuTuhdfZxbimYAYrLs",
  "key9": "2kNKsob1P6bT3B3re2pxD3ikEoBvMTkaZ3PpndMYcTJDqnjuaJBgSZTxeDSArqMSGAgTpEZTiXzNo6XacdGMsu9c",
  "key10": "43TmT8PFrScvPkNr25JSoQyciHPya1mKCgV28bvpMT7XtHziqXnQZAxKjDZvdn7GDE7bhATxKXggDodTPJcpi68c",
  "key11": "3rXFVC3Tmf97kWoUxksWDTYwnTxUiRF7GtnkDUAxdfvKJDevyeghtZPCPCB7RrYZCWdbNz9ZBgocvk6w4XojZNE5",
  "key12": "652Lwm1qcZKLGB6F3ekNpsbbPuKsCtY28wEiLP9StFa8C3M9WWZABDFboaWnDCpVQQFjVPuM4T6NgcjgxSavvKoN",
  "key13": "cMScWaeCejjiy2a3iEsNhHoB3UZmJAz66kF6hjTK55XdGa13z8BUAy9oNg3UoPivtktEeHeD32W6f9R1s7eqA5Z",
  "key14": "389p88GvxqjtctvsWQjbHhu7iWHSQx6VZ4HHzcaEmuT4df8L3g4GBy2euAowDPTZBronPpy9rPzV349ToYTS36Q9",
  "key15": "ceEoVKR12W5wiokb3ygFGDKrjgigKdvrD6qanYTDmo9J38gPfhmQSLkowkBfEcKN5s33zLPTb34JNdG7LWRPMqA",
  "key16": "2AtBEEEmKM2RA6ZPK92gb73FE8aAJooH45tXLZsBf5iUN7JQ8GtuQnMALm2pya3VAmyreZjziAumnVsU1RhguoHE",
  "key17": "2Ni4odjokNqgdgy1vLxUk9EuMsqkMtoK8BbfnVQEmwHcFPTxYYgPBDTs2wR6A2xpgtU7MrRKe3y3zKTje9FUmMUz",
  "key18": "eZ3PKFZ24QFVLHwJUDPMypmRBFKtuZieqzF23esDpgPEzjf4w6TUaiHRKhnHHhttA5MXVsg9esBn1oLtQ2p6V9Y",
  "key19": "2c4wWhmJvdaZXfoVsdf8jDas6RPCE7AH8wfubZJu4rx1jJ3qL4HTWHCUVK316ypxAhxRN4tNhPMgHKaskDWbpX5v",
  "key20": "N8XzHAqpxcqeNLq2yzcezRATqyjVcvhRPSULUWRj3sdK8yPtPQdfBk93RjqremdX8JzHn2TkcRKvhgysqyBJija",
  "key21": "2DJW1vuEsYfZ4vsoDde6c64mxL3Pe8XUpUJobvRQcHfhRM6Q7dHkTn2Vej7LdqWTkWKFgBQXRMRTqmd5joVkMrVk",
  "key22": "4y8AejKqZRKSU7vt8f99r4CzDLme7aZ6wcj73an5C33Kk8NsWFKCG3or4rGUpeqDBmweRgk7WshfCTX1qqNG1aJe",
  "key23": "41XFEBnKhYJzJEAVb5S1sKFQCJPtpgD34XBp7isCuysD9pbgEsKwJ264nxc919LYWdCQ1LM7TdW843kwg3sGX7dY",
  "key24": "67nNNN7aPYHXueWTGKfQExDC7BNKqcWuwcgbKVWAFaDhEditj9W33kyJQeB3paw2LNoVz3UUXKsep3s8rGjxmnH1",
  "key25": "3dz86nRM5GmffGDW34qNhZear1sk7fbRkKVDz8K9KRCbPQst7h59dje6YMgjEvz5q7S8naSrtzBny1LSn153BAi5",
  "key26": "3xg39MD31QCSf3inAHVuexiybgYqfFpuUudysXzcBHtosqmacCSgxB6GH1i5r6RWSMa5JCKtioW558ePTd3mSvJE"
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
