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
    "3RBTzRz4Kon5DNJf5dBZsEMd55VtTDGBfrim4jt2DSJgGzrBCwfQXuGiGkE9nf11xW3js5cvVmbosdsf1syxQQNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVj8CgtDzGdDwGckgmCGn5T4rUtK4aymLERvvuPGAE2KKLAtGJTGKihJ3hizb2a8KBzyfDnUqnuKpNLJGLRdyvp",
  "key1": "2qsu9kmGdAN52h7AegsjxFKs7r666iuiTZrSC327ADtDWkJNDe6HJfBrEJtqmygkJ4VNnt7WK4g8vpBoLAifS3VN",
  "key2": "4qxhQSfoVANEoSMcNx5ADLQQemU6VjSTxHXGJqp4x2kdEd2LHYZgCSq3nTgSQZp45phnN6aLYXMj1ycpQ6PoQkes",
  "key3": "3kCfhKe5Pd1biA9dNZipFDiy6zjNkQnokvVhdgFZZwg3BRCGopmMaen23zbEztZu9FQzjYgFGjtbSNrwZAqV7g3S",
  "key4": "WAjcaBzA2QaMS787vziz7vScnX9o35amUhKWGboFjFn2iwqHGF8pgpn7JvoKSnUdWUzXJH93Aa9sWqom9jhbqwE",
  "key5": "2peCnGZWb2DYo57MPQsw8e1FVcQLdU5SLKPJ9Hp6rxSMoWnRmQyTrdgyun4WvfbzPuPG4PkbVfHUfaiaFGPxHPrP",
  "key6": "4cyxHy1cRnYBtJTnxegfoC9ueyGxhgfbB5CDC8B8DGUbenhchbezz3pGrWPQvDf4jnJF9eRd4tjJmGzdTLE86gMJ",
  "key7": "2bdAJXCZ4SKumPS1hj8AXzNJhsnSpTbSra5MynXTB5PNfGeb4HHgJA86qHj8ixeAXpjtJHAgPYLpPdhwYXEh8w5z",
  "key8": "2zELbqkJtPbfDimQZCnMtFK27d4pWSoVDvxci6FC3z9AEs5PfM3rJwo3YFUenV1XqBqJkpzTuK941AKaWzgmTPnY",
  "key9": "5KfRdT7sUfMU6okV1pQVgopB7VzryJv3b3SDajmCfV8yvNtqDgDujF2Q2779Wr1r5D3MVAhaSwgHXWpfgiSfgVem",
  "key10": "4tU3KxHqq83VwpEke5UkPHPrZzCjS91m5cTRp9WRHMPbNCAun498w1N7UnYwtQQq4v3wj2fzzgGpcAB96anTB92e",
  "key11": "2KoYScTBnXBQ67uMmV7EKM4rDz18egMUtUdzFi5wH9cv1Kgvin7VJWfjKozvjQxCGZvBJgQhj9DLFY688pDKtkrC",
  "key12": "4zXw4EQRToMn7qmWp6ghaY7vvuP8M1qCuQBkCVhTNCi8WgoDDdyprxeFDNXpa5rE11odu2CqnyGziwk2HZkUHcgi",
  "key13": "5TAbaeqnGCXT6ffqBntfYJbxKiu9KcJwzSymsDqabBUw1Gstp1XGc7V4CBwJgyHWPSf46mJZdFtNdb7fuEn8j6TF",
  "key14": "5s8oJPm9V9j4ma3zkkHikdhxZvWop1m82NsoLnbcsPZNiWZyE2oiis78813UetavffsqLoXWa4wCF8DjzWh2NfZs",
  "key15": "drxeCATk6rYe9S76ShUXvs5okw2M949zbk1BX9d3MLusJDBudC77iPKtwWGv4w9yaLnYQzsmgLVwwLR1S3R7an5",
  "key16": "bsiqm4gtsoURs3nYg8Vdu6v3B64UrGcHFtnPrXsQ8w1msMPvvaaoNKVoP5ZDu2iu6cMzczVquQbB3wLA1F5m4GZ",
  "key17": "4ZmE9abkfisNdvd5ZhLRv4NEY8iiBZHuCE8KUo8BiUdGCgYp5GCs5kCUKJkcedNqWBrrig8nijFPxeHRnEVX6Vts",
  "key18": "5PdTpWR5u4JTSC2rBGJtj2bceLgufmSrgJfVt7TiYruj1wArr9ZZR2vftrz5Xg3fvbkMDXNL48edAkxhCPoY1iSz",
  "key19": "5PGd2AeBNiYX6asUR8gCKjtg3zCeEjWPmTyxrpCugZAC5yAjEoBEPSqMnDXBfcneXLNN96o97Y82S8LydaNvcfzp",
  "key20": "5Xh9P3oV74MUecPHQuCdTYhUGBLbf1roc2XfeGxHJahccZ2EQtbscoHZkPeVicDe4MSmW6jiu55z77SLbJmfo1Hi",
  "key21": "5ckXUGzZke1nq8SRgFKVN2TFbK9H1gNr8EjBmkyKM7LS118k6YuQGd6N97WEvXHGWXinwxxBunNnCx2rx7h2ok11",
  "key22": "2GCTdeYN1boY9nEhrXDCc4NcqTG57Dum9PuvG1TGM5M3XEr4VqUTx3zKhvoNSWdFA3ixBVmNdQoR2r2wLDiunCvU",
  "key23": "3oH853YQFemsJZrGaeUMgE3X37H848T1eoKiaANfYxacyP8HGDYTJW6R5QzkS11maQmacCffq9E2pjWwjK1Yd6Ug",
  "key24": "3VDgsckPST8cXv57m3RbMxTQTQHZNjX8tKxSzV7HFpeq8FEPnYiFYcBCCcMcGbb9iiJo7X4cfM2YkmL3CHbNN7E6"
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
