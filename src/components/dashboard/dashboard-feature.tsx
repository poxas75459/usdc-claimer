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
    "bpVx9ssuj3UZXtGuT4yrknD8z9r3uEV6sVfrfoxDtpPoPBzCrJbDpszJNqC9WVT3ceWGnQseH9y3UQQGi5tmhTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZy9nYWwie1GHrHRDmoF2wM9xbCp5UxMANLvWgvNrwUcq7vYg6nCArwCdYLvXXJevih6qFc9Nd9QPK3XEMN2pEi",
  "key1": "Gjnuz6SJvuVncXzmDjrowgUmPcAMshYzGn6ysKyK5kbHkvCwSuWFyJRY3MEWVq8DiEyHQNgztHEqnC5g6ddYgjx",
  "key2": "4YLygUW3hf2KaCaYmisQsVV23tEoZ5UCiCH3m5GN4ssoqiJhjDy9xxtUjtpjBEs1apZ5YfME35vwquneM4EFD6tk",
  "key3": "5Ss1imuJfe5wVi6Mx2Ktf45CmbXXcL8a8zzv2rhJerAKLPt3cgr31iwJGcdHASya1Aeumk1Q2Vtn2dAQ9NTeiBDZ",
  "key4": "2KdyqLzCQvZHzrDMRjQtS6jDgZjAPdJWy5ctRr8KMF5TXpEgUQjX19BzehpDMTezWjR6kZ4Rmsgdx89inf6jGQfc",
  "key5": "4VEChEbJ32FHJ2DBuWWs3ATpt62bCoi1TH39UFnpCAoKqx7XbckpiK98n51KRZeR2w4uLjPgbs3SAUN3VjXKAarX",
  "key6": "43v8bPZYXnWE5FuwRv9YSkc9TxYjQ4rXAZA4Dq46uiNXxh1FKTx5ki8wsX1TLuQcRMJAJtxzeBPmCHUUzJ2yd2hg",
  "key7": "3DaERzDwUC6QrCv63hyHRb214eDYKCNEmVpAKy8L62vx4Ru1sc2qp41HZLcKttCHf6cVKPDYWYFRaEFoBHgGVLZL",
  "key8": "3iydwCHW4SJF3QLWkH8MLw1eHHk92MEMTaJyMYa2Z5iGPcKXzQSP2FWPsJXfRMXHgoaNHGzg6raXJyQNDmSkLK71",
  "key9": "65BterQM2VBgSKs1PBvDMfoasUb2u1Kayey8kjzwSKBjqWyAj12qSPVUVyW1kPmBByD3ZNGA4wkHALND7rN7WM8A",
  "key10": "4guGR2gd8J129QFeTudPfcAYshGhvvhe4qzpuo56gk2e5gK3FWp4zNQir7rwBz7MYuTuAjSXvi6xJT9Ek88sB7be",
  "key11": "5P1wMh8mCibx4bd4gmHHhY25PD6QCn9mX2Gh41XXueW2uBuVkHnwnwsJJh6cwX2UVBDkPWGCAm6btGE2DmHJAuvx",
  "key12": "3qGiqrkHJejfGQqkKioj5MGYbkbfAS2mnDLgTk5ViqcuhRWyPRy577zA2Cfcsi5qWtYapkmnEqCJnMY6qg6Zaf5V",
  "key13": "37p7RLofJD67yNRPDPM8tQ92H6W21TnzFF2WzGzfuSZVpho84yFt5aWjSQ3c76e3GVJo6tbAaQofKo2Sk6BF3Q78",
  "key14": "3xodLrKWEbrq5xELNbT5VALVbbvQjApfbiRRa9DAVqPdFxHSFpazDvkApZJVa5s48wQNfthD1JfUP52iu3Kt37mK",
  "key15": "3JVdFKRRpqvJkNNHncvq4Ymppu29AzguvpCELe4bx8Nm77xTYSKi9owTi1eDvvTGmrDJZd2FzFfsdzgtDFkPbyVr",
  "key16": "jYpNZ1nE9CCNHVVDPmCt12wPKyJ93EVVv8PVJ3dnt4vvjFvBDqdviN8je6DVhQ9NWRcnYNuGNRPR7W6xzwkfaAt",
  "key17": "62abB4gtkuuFUSiaSxTUtXi29cx8EU17ocwA9wwRUg5nfLsZyghZSadbJXH72Cb5iFV6uUYuURmV7yuW6fMayTbr",
  "key18": "49EDH81CaQsrUnCPxnTJYyMpACNRx8vD7DYs2dBMzBmYjY3rxUSD5h6FY7h58CsodFi39rdPSduACrUYH6K186Eh",
  "key19": "3HNuqNGoMpJXi82sES3QTdb8Za4VzN3on2LBQ339CP9cM7kWFdotMBuzsaQeBNqHNaFxaPMcJjadKpNc5dwXAGLr",
  "key20": "2av8QaG55ZUENgCp4ApfGLt6z84irTp99714ztyzfWKnR3sqCfw55Wn9AUwbEd4tT72z7FLGV2MfSEsXdw38yz6H",
  "key21": "4UdoG562CZzdPKuwB2NQDAvNu9T5oh8jjuhd5REY21m7ZvJVjbSUQh2sRDiVXxnUf8JiX9Yku3HEpoZf9rG1S7V5",
  "key22": "DR1nbWH8sF16wKisbTRWjTDYvtpKQQLjn9jRGTZKs2D728Pu1eCUFqsfXgcwvJRLtPBp6d7huf7748u4RzYXe4H",
  "key23": "DR9dGDzKuBaWTFuXMndnrA2ZLde43RbCEP4MaBXpCYUtGMc4H1emFaRkJnMdbfFZboEWpRJNJUKVhqyDpGCkSEL",
  "key24": "65bnHSUvpccEvu2sdFfBLERZRrc4F4yeZY2UEKPEegqPJ26jsazDoDzyJEJqeptrv8kL8BnKoCXw43uPxbXdfEZM",
  "key25": "49SeAesCpQSvRMUcGutRRYrYqqurjZp7PiaHQDKGJv6yAwabsRLgfgRbRuCPwqpJneK5GUw4PZnT9DTkwAhKUY5z",
  "key26": "3ioSmToQ6QFCqsQwhqhaE2WVr7b2EKFXZoJwLdmPnHXs4QCKuC9auX1Z5TLgKm3GgYFgaeFa5ioiwnbi6zLK6L9g",
  "key27": "5LzYYACSCZoV5egF7viRcnfes2jQZmJ5yE6q8wUfxi2yVbBkM8aTACiMCjNuiAxKc3n7cNiwLd53chPD1sm1Vfwo"
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
