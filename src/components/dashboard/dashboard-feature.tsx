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
    "39QCfzezg6wgjTwdtQmHzmWTyDLBJ6FzBTE1xWyaNsB4sQZ4K42q2hWY7adF4bwAi4hXnAkTn7S6gzEVZbSuDrRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "513fMUtmgMSU4dKW5UDoW1W8cisVcJh3FLy8UZLPu15TBFhYSJewYWg4JpwZTa1xtaT5niDvwxxumkvR8Qq9WBuK",
  "key1": "3KEAPwyG1rB7p79ZmKSf5JkGwBQc5S3ySLcxSq4zBcKW4rRfgdwYj8wQXN5CYTrpHgG5nYpr5NSEQiXVXyMKnSLL",
  "key2": "2bdtqdyBh4JkqsXeuQwvejJJPBubk1KmJnsFGB5rZJPK6UKd4cffLPXppzKwCtdaHHRaDYW52NWBNFvdWK2kqRfT",
  "key3": "4fhF6wFomGVG6yeJ9tfUCbCFA9zpfnaVi1c9neBkie4gKWNcK1j2PmLigoNkAK979RkJin7QX2KjnsckSnenL9GH",
  "key4": "2E8oJ2xmFqtPpmYnDGLX5oY52X6GD93GiDhxAgzGx4dTQwnVuzitk3KGr8buHznsQdGQhRKLJ4GjVBpKtBy72uaK",
  "key5": "3ANUtpKaYqmp2KR7KPANM33AJ6TWMyGNqrjb2Ug7DaLNvwrQoXJbYntdFg3udTRbK16zZicyfn6tdgzUXcg6pHgi",
  "key6": "3uh4GUY1k5tBadmSLxxfWRZt4T8T29EGYftqq4ftnfz6u1ywTfW3wcjVWDvbaRRsqYm6rCRCrcVPw3KhwZrwwi47",
  "key7": "44GENESGmQC1RbB58TLYCvPGzGhd2pcWzruzHt2hiwCUqF2v4Jxe56riZxr8Ft7HpPDDfvfTi6MhBhGo6co5sjfC",
  "key8": "35r3xgvM4HoDGBMfJcQrt4Ka9wZ33pLjYJc8CVjLPZH1EafCeiKSLRuBjEpmERhF6vZQsfcWDSYK9rqV4qnMKpM9",
  "key9": "3Hng1oxCT2oxYKN2FRyBeobXgddebo4KNBwX23Kv2o83cbAj5yQGpEcc7aEsqVP4irBcbkHXAneWiiTp62CZTeHy",
  "key10": "5pCZqZ7AVuG4uWBbjAJHvPDTjXWznpU2oFPNuPow4xf3QSeXo33wkFT3oDFBwYnSeF7ctqiiPNFdGVWALcbGUx7n",
  "key11": "2qLg5wJyq6a6jiK9XDXCfbFb8UcrtCMrZqyd4NkHcXybVMHYtaLrrcsFGd87CHf7vUU3cSdNqQ7tbJuL4L2YBnXv",
  "key12": "4z7kNRuFjeN6aetocuYPip4RoHF6yBu4R2nmrctMrstwMd2nWuK33YMEep8hzUKyLkFcfNbCXA9YPb98Nkt85TK1",
  "key13": "8P9PZZYGWKChVaFUT7gyivKrhyAAudpUcDFM1pPG1KXwafsc48ZLMrGcZx1ZT9RqUV4Mzobub4V5oLsrKNQAUam",
  "key14": "5MBeKoS6KmJSDjaFzPYor6LDVoavo6TBavVtbEJcvpTTrXfYg2oXKc5GRk4j9oFUSd4VcsVhUyc9qZ7cFaCEeaKp",
  "key15": "5fHgHQYdH1F9VQFiGDjzCpX25CZMUAoNDKjb1qihxoeMvG3GYvZq1pyxzCQEy1F3iNeSJcVapDLRn375ohNtw7DK",
  "key16": "3NP3eTiizwctUtkqHa8riLiarPLNFDrJVuXgxRCKz23FZDqvPHr6dY5rByWqy6F5Dn3hDszJL9bjaAQTeZd5GC4o",
  "key17": "4CUmKB3zeJwaLzCeVHTNBwtw2bXprarvNFK1Bw6Vf5PKuJBXthYRC3EgouMschmAtCdSCotiofUGdHSfTyhnWFyX",
  "key18": "5MiefCPLtXbf6ydk1MG9WVh4ajXcJd8ADVwkkRT4N4aayFdD6nPuZcwkMkzTAmgCPza76t3zS6rsjvfJCCPTiJAa",
  "key19": "52iuRyoiab4LHawEsJNtFTQPE4qyFcYY2LL5uLD9Unxy4gsdrjWqAib6UvWmuQd1UcENnma3NgER8fNLc38jekyj",
  "key20": "2yTojRubo6tRP24uU3iRQ9xArCVykGSTvFVXUxNMxzwahmj9wRMoWUri8na4LRTsL3XsfTvGmwpPLv7aEi66hZJn",
  "key21": "5kqSMYJDAjrKijCJqypehdFnyh13MEKR2h2aLVkx4HhFwJLjo8wCYo8Y7RGFeeergRyxu6n92NcUzT6oM58NKrVv",
  "key22": "5oN4zjBiQQTq8kemgviVBtJn5UWMpG5v5nG5krPMMB4v3EPytFTEmyjG2t1Ux7GWbEBbFttXQsMiq7y7TqGJVp7o",
  "key23": "5JTq2sxqFLK2R9oXBkQzQk5oYtiecqowjUjtEMukWaQ8grVXnaXizgvioPJHqcWKukE8YJNoCuKfaUoLCVGV7KHz",
  "key24": "V6Vym5JVsRz1Nzi4AdBgvxSt1Dxw3ae1NCSMefEKCMf4ztPgdJW8xcZMqewfTtwnQV5c3FC7u82H2X5D546e277",
  "key25": "2nqyijEFdGY59UxSd9nKezRqK1csQSnScLSUo7BP9561WGyCDhaMkj83rHEb5wXEbwUcsdDFMsZsZWb1nEjHGHFE"
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
