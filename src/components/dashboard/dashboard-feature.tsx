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
    "4wjAgtbEmA2kwVBPz2rEmaEfhgheLFsXCDQHw7vcejYgXdKK5qSV7eVT5tVkwPEyF7ctUF4DkJUY8LjBvG7peB8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66g4bqq1Er2SGt5RnZhD18nnswKZAp7EJykAj2WpAwxWBpsfhHdF155zMjZTeim1rQ1psAYuZcvzysH3xPUENgpT",
  "key1": "bQqeKwUV7c28hbWGdjAJvp5SzKGGz2mEi1r4yi8qZYbVirYe9D7EBbh9NQ5wu2iJNqxBtfLEFJqaTYJXX7hwzqg",
  "key2": "4sqJvgkNobSCgLx8vWddowzJK9EmKjcQtwGaqVZNcjRfruXUma7DJVtEpbUuqZp3WqtGT7TyWaUHCBQkGH69Pzxe",
  "key3": "3yr4MTnSk9xmCp266myTFvng4885z2fKRuPN6T7PQss6FgMB5DDe16khkdWjKFcqDFKBGAhzqDKzz1hAqHwJibk2",
  "key4": "2zFacuDXVYspus2WyS1MCcNsSfLXvro2dUKufXW5DuXHRXvUTqbqD6y954pfSQVfq9vmEes2Hrpyz5Gr457xwp9H",
  "key5": "657ix4cEexxvUbL58QRwHiPayiaj4GhNFnifq9eiX8tio1QYyjLXqgaPx3fFqUEJLbGsqypQoMxUsS91Aw6oYHEM",
  "key6": "297gbfeeenceKAyyoSGHdwtdNk7MRtQtyr7hPMKKYv8dLvdcxWnvykGyFcWr73BxReVnNaWjHFDkp5AHzJsCDLys",
  "key7": "5aSBupq6fWeRvW35D9aRZSgE2stQxHPotqaSX9AWW2zJvqMs6DLoNhocskDEwkEbqarJzHR97r2n3Sr5ebuFpHhi",
  "key8": "5gR41KmeCtBmUZDdwmPe7PgTRDPkM2eBotGeT4jQmS6tSpPDNMBJXvSKkECx7A2CAi3KrnacNXjbPn2LSWeTjtBh",
  "key9": "5A9Aep4f4njPWzGqmZiGyQsHCmdaHnuZxKzAXBsRLxDNqyn3zw1PuHVjKuwEmrJCvvJ8N3ANvxMDGsS4NCiWZtco",
  "key10": "2eQj3GMnmtvTvvyy5kSYBjT3GDyQRC1qCjUzEevNuTq886RTRrhMMcgVjXeQDSq3yE7tyGFcZ7U3QdGBazi8BeJK",
  "key11": "2q26ThftED6Ko1u8Sx8DbTg6MVW1J3RMjaZxiT5XQYSwdm7PqeVbTsxJvNmUxwLnumjRnywE8qavjj2BUNnSEWdN",
  "key12": "4emJz7Q8rRcbY1M8PiJM98WrYivrShm2RTgzABbmUvufPgB47WXxzJEjKLe4HdmKSevXcGs9yPv2ng3yAsJAFBmy",
  "key13": "2SybCoYSwSFhpEKCT2vFeTibEFKjSd7oY2AVkd8ySkGr79UurGTkjJFmjkBLwmEG23FiMDcSBBsoMmiDPPGnR2xt",
  "key14": "w6o8aRViuu2Wx9tFqU2wTSbuEee7W4DKL3zoskp4Hu38QiLwH9zUwWo6eCVk8sanHT5DYF7VS4uf7adAhx9tE4k",
  "key15": "24wcsEn9xfLw5AVvpY7pQDCU5SSEj1xnbAAp85HZZn5hTJVteZp9Ks6y9Rp3u2EbAdkvh3z6zGNbYAHddcgqztJ4",
  "key16": "3fAuWKXptAu71S65msBW2USL8jcZduyauxQ47Uqpv5uk9MfrVTzwg442tZpASEBNowYDKM5YaaxcQLawaVcSfzqd",
  "key17": "5tdnVzY6RZT6Fmmg5aJida5pPCqg4XZ3N4FCiW84HAVED6zxsTuY5XegbVRxp9YxWa2zjvivTJ3wCF21wtXwpnvq",
  "key18": "2v5vnEGLcsrfnn2ZNpUdiqTEhJ7WCdZ3M2eW4DyZMPAEybzLKBaDQFSry73dDSmwBqqTsgLWCnQgoxyqgjfCaApb",
  "key19": "22gZduiVAKPVAQ27P9YmWsB6XfwVxuRWReAzXEiadgD81RuPeE7LNRSTh8yEF52qFcYo1uBY5E373NbD7wZN5t3s",
  "key20": "3VzK6UPu3e9hvdEUjP4FTmWke8dLUsTy4mn142L9tCVhCZgmgg554pKw16GRcbCbWv1spd36NTMW3xT2GRQm2vVw",
  "key21": "2ArNEYWcjXmhPGtQK7Me9XkxcZVpvDRY6onZC1rmPNtv37nWWajrQTrc9NdGvbRoB8gxktjStS7WJeCSa1BdKvFx",
  "key22": "DkLr1Vq81Rjah8hBzBDFyPsDmXsJ4o2BkHXz7tyXRVYWHCyLhdkpvXqpwuadbfdnVx62NUSqdLV4zSvY8jLs4Du",
  "key23": "5mkWjpPfv1iSGJUgtGfC977jAEEECcrTNCC3gwK4QZj3xpQyiuJJF4mgaQR3K7hQihiwqn5UXLRtoxDDmcpcGU6P",
  "key24": "3ArAFfwbfXQ6yiT6EZ2Ah8ZMV1XN5AYwR4t9x28F6dAihFaSCXX6dY33YPwofLk4nFPRcuvjYduy61maKxzpbCXf",
  "key25": "FvhwCUq9ZcxD95GbEsHbUKbPtAwzEPiRd7eRmpkHhACL8jdJpdS3EC1X9qXLP1F9mNJcMuUanfmYqfCTbpFiXdp",
  "key26": "54uj54TuZNyncMtrT9jFehMkidzeAn9NaMpP1doMVQdFuzQvD2WnQExRPizXsRc8vVNSbGMarNyRzFSVgtthxbdj"
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
