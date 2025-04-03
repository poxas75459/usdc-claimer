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
    "5GHvGnR1vZmLHDJsfnMoEX38MGaeWPLXmK3bixZUNN5SQaLG93d6WSuEKnaBn8R7w82acZMf1TPbgWwwHyNkVy3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TWPqTGjyQYXvjTi78MsK5W3znxSh4fGGWHR5FGBVeoFJbg2YN8r3BxBRCjwSAmDNB2pdqqBthNZ8CMT1WGmrYai",
  "key1": "395w6HRKUB1q5qSe4tHngLXTUyXAHHLEhBs2xRpxkNTMUkQviS3nnKY9PcBNdzxJzveB7uJLdQZGb1qw3vuTXnfs",
  "key2": "2TFfN4aNyEMNBb4RYEz9VzMqw53HPHHcaGB7z95zvcuoJhHoCMkWo8kMaz4XbUy3BUvwcw6qhcGrTghnvCU9PNHn",
  "key3": "5YSH1GTAT5sESEwY1djPb4xb94cuEJDa3T6tu3QmBhrhXsWKJc9GyMPALimWzLCnDVjEYh4Fx91CyvCUXxJnZvnT",
  "key4": "eqgRQXCpMA7BxYDB7zABtDMFEDvj1Fx2S8R7V6bMGceBRkVoUYmHRZ8MHqEuv8foCRj6Ze1QvxjgnyBqAbmUjnp",
  "key5": "ivbmBCbFEGfAUAsD11bjX6huiQmvZF2QVe2NmK75CiJZz6S4Bnag9NLn8KcKGNZBPDLdti3wU1tVguE3EP1Vp9B",
  "key6": "3cWWauQnLKzCYxnXZYjbosHJBoatyyV3Bujz6mg2dEEZfrysfTEuGE9euPPERHBJGqrshULXMixqJabxy1Lko4qo",
  "key7": "4kJiKwDqaFib7M3aEfsU4vovAV3fmUE4Fj4ZKsn9EHSpt8BnVnyriuMJyGhJJPbVgpGkSWEs4d8nFi7Z4vMX3Eoa",
  "key8": "3qny2h1so6VYVh5BTuKAH3RhmaDPBDvXE16Ps4wytEkvrHUqyU7CmAFjP6YAD9wxScrNPN5Vs2FYPtwNdJunPpK9",
  "key9": "33j55oV9tw4xXvzNyzycu5W39M7uKR8MR9LkT8aZ6wuhTnJH8xVAUD8X8iGvLL51Z4Wf7HQvLwxR1i7ATRdSCYzP",
  "key10": "3Cd3xpiM9JeDzWMJPcqWE7HxAP8jeYas7ttU2MjfFTv9x94sKrpvKXxQ8EPmvuutBMWEV6cEavZM6MDcHKwryUyK",
  "key11": "4Wyv8WVd3m3H1SwAWcGaZGpFCRNj7drtdn9KCy5UDbRDoh6v2N1LeKFpMi3y6uL9fu8Ur5dRvKbbTKLm1ivBfjF3",
  "key12": "2uQzmwr9MTm9GzcJYosqpGTTAffnmMDwqCDui6UHjn3r9c5ueEQfxQFNsLkaVSPZGyJRvyCHZ5XXkLMT2yeEQsPg",
  "key13": "YCdSQSkrEMCPdVZp9igQPfdqBEbZZtB4FfEzXjdqmtEKEZ5kgZhRgc7ZaPNedUGcXzF7vePGmgcnFQupfjKXSbu",
  "key14": "62xUY2cHxTBnoKGSXwy7e1X27vYrxfNYYttGdbMCahC6M5a4LAEwXLSx2tMSLdKTYWgBu6FZCycEK7wTDDzZGGVA",
  "key15": "64L2DhiEaEm7NrHBu6VkcLhJfHnozM3LyosWmVqoNFsjY2cENivo9HbTNjJBi5pTGHcyvowwKABHZB4r4TxGGYXu",
  "key16": "45QnVK1t5AVyS3CNYyakBh5KRsViFAsku2tkRsUByQVnNCCGtenmKjncrSZU3KFnNT2NH1ATNXBRZ2y2UXk3DZEz",
  "key17": "3RFtvCcskx2nEQ9bBHmzPpbUQ7Z3ZoPyahRBBouuXQMWDiWq3uKnaUUoFvQFEHG9fKjz7B11BnpKY7ziUMZUahhZ",
  "key18": "4MTdpLsMjmJeUgm6b1aQLN3nRrW257G78A7AKdTJJugy7NWQEQtYAxmzXr3iEga9ckEFDmCQZ7ynhVKDvEmAXurN",
  "key19": "CRq4JGpALQ8MT3rNwrgC6SETC1cF555b33x4kXf2QMqsSih35Du2qR97yafCzJ1DMEJA4bKzw9ACrkZ2BYn7bzq",
  "key20": "3qynjbVxB5h3J3aAFkXqLtr76jKcsJDpxgPnVDuh8QePdkJMLNnLRLTtsYioJYeRckZRcqAuiT1fUMQtkXouz2DJ",
  "key21": "5eiMFRyiug1Jj6Psfy6jwG5LhEYuWTQ3F36o4mEcpKmCV55Azr2NHjCQqejoL3pdX7EFBVKpimHBhxMhHAo4vS5H",
  "key22": "3taNHJXgPEXWDYXXkrsyZxXdNgkNUHSy7bmeDM71dGMfBB6PVNruQKDPEyrraWs8rGZmWa25ud2BYp4DDf6vHxTh",
  "key23": "481ysBd97NLer3ghX6Ge7PEPkW8yXLJje8iFW9vMKBeyH4tvLnCMGqQuAb2SUcqwLTbDekZVVS3xghrZZis9rnAZ",
  "key24": "5eHe8EUKg2r573RxBLT1KxUKW76bSEipWcRigszxfc2wD7gyqkbBRWvidrSE5Skvaq65JUPcCELXsJFu8Ppx6ESL",
  "key25": "2Eadsr5KmwWtNXuSkLfBkyxA72sZxZ5ji4PpR4TwKmQ7n2ZYw9PdtoVb9ApMs3Xq5gFK58ShYWsVx184WqxzGryc",
  "key26": "5VwgQ5GQjXdQihPdZNbF3mevtVUMPEgnTHKqAdda59ipWoJjbZxoDr9K6ZGC3hB8zFdcDartTcphkkxJ37KGwAaV",
  "key27": "5RTWP84CM3YMNDYXYckW93y2XM2CRLXYuUWDqYXDTFmwAfsEtheQGmr2GXZLEQwwtUpkjyAJnMqbKZf6mUwvV51X",
  "key28": "5yVpjPqUx1CX9yBeEtTJ5XQNjXDq9qLQXumibLb74eL386CtN54H1npUkEDJ9ViqZBdNM9BU78Q4fGqxuK4ckSxv",
  "key29": "5yiYYvsnwvaKqKmpAu8qREerX9zmD5uKsTg9JgZBb95Qeic3yJWKUno8qDh1XMPj7hDZEjLbsF3iHvKFHjA8BeYN",
  "key30": "66uARx1MskPhBbhbNQCS8vFXTTGw6q3E8isewtB5WGfKznAJEiwjUG65udxbrat94YtGbFmMDrRzeEWCkiwA5xsq",
  "key31": "4wD3ygzvCAGBDi8KGP6dkfjKmzt32n6nr18zZs2deyqk2vLFqSV62aYqm5WCS1At4oaVifJHvMv78JofNjwiFRVd",
  "key32": "5hoaos8TJPL5Uewz8ie9YeZFAGvwN9TP5r8eAyLyhsiHpHvv69vg6HTbqadi91ugTMqkKGEmdeohQ3eJy5Coc7BC",
  "key33": "5kjjB4METoDHFJpzQHdUdqEGeVeaRKtQVPdSYEkaCe62yEP2Uux9fbthWezcq4iooWi6eb31SAhngPKMqpf6FPBG",
  "key34": "6v4n9Q9p7xoiT876GXkB3cwvyr1NbAMzEDb5uS3QiAy4K4bMUDkqfYhtqnhrKwKY4Nz55v4J3q4wU8Bqvqit2cp",
  "key35": "2dqaYFXgbsdFixBnqwF8NC1UDRV2srraNDe8FQKAGJeBKdTqWAuzyCvcmVV4y2WZA5Wpi616WMviDjSkQmeayYUC",
  "key36": "2s6QjkK8Af5GzH3Jpu1LugnKqyaZ78mwyTbRhkHDtuz8umSbeqYBgFy9g9LMsgprLHSphgq8fNyo21gDVSJ6UD2C",
  "key37": "5RS4J8zhmr75nJ5KyT2dnkr2VrQU4atnA6PzsGyLseCbQBBDdJJAnTHfEfoybuA29Wes9Di2haSAnWzqjVZMckqw",
  "key38": "29E3HcBJyf1bF2YJ54oaJJQ4QGUqiqovdYbgDYrj4EqCWijtS6oueJ6ctxiiR5eCN8UGUiy4gXnJjHKHGGUZj5qc",
  "key39": "3nanBojsp9GLDaivEpKcNyoAzzPtH3VR8N12wjajGtP5nTjPbAowuzqPExTN9NGUma2cCkBgurJa548cjpjfhzX8",
  "key40": "2MD8NnHMyDfzip8fiw3mYXkTfuBguLLD6b9PuecQH3MezNwXbR5EQjqpyeTj8HcB31tJuggbBbRvNozgVWmPZHtG"
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
