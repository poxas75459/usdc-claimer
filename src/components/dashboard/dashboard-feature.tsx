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
    "5nwvYkZFcz9GbqTGaSSk4CD1MYQsDVjzyKDi6Tuirqcu8JT6Lm6hGaVwECAdc6aWpufHBmR8Mir7gMF9h8Xr2k9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34wMQfcMdX48YKyvVJsbHeZ81kV1VrX1HjhGnDVAwdCuxoc663JkNnSXzEmAxn7iUWtSg8eHPKqjvYaLDr67PJZF",
  "key1": "3H56kebNsqFh4D1PtbYRJg26eWMsc8pFiqZSyCjfz2Ht1fvcSLnUj56Z2FBdRyNDuTC4woPukcJvTxhXzJu5tmzZ",
  "key2": "5WQGMyYhsDKuuHtbmPZCv97CuueeGSabT5uBY5Ex5CdNMKjxKPD2r1s9mQS12SekzKqsGyVtvKN7KZBcpnZSyygd",
  "key3": "3kr3JviGS7BRoP91aYa8E2cTXEHUhEprxT6VWdhrd5o3Jp2JB2uqZmvtegkyUm3S5yop7QX3qv2En4Ui6p9o3LW4",
  "key4": "32Aby1CJBzuoMQ68kbvxMNsK4XzHjpqyqCogX3eFVxEpBjbAz36UAADfP1bgsAUMpHguzPakb4UtWMeZDvFJtfwi",
  "key5": "ETM1daVHa1wxvpeH5oVchxthZUNp7vDSCWudxw6oQbngLMfwJZDZuucxhenjxF1JZRgHfcPreDmCX3z9eCQwUpZ",
  "key6": "3FML3Pqx6mpdcnQCM2zC3oHUxjNJPffEev2gbquoWZZUo96uCN9QyWFMegqGf6ooE4dKcyrNWuGu4EhVArwaNZct",
  "key7": "2gbSapyg6eQTy17vt9Fb9TFsz8krfHAJnbBqeYmu6CK8hP3uyEW9hqPq99jhpzXCFKUMG8DqxBJGdzuvTQ4So6Ek",
  "key8": "2uU8oG7a7bqx84UEQ7NagFTEzDqEiCK67J4ibVXRD8FvCFzZeoteR4KjMud5kQNg9U6m1Cs3HT1BGVaNyELcDVFe",
  "key9": "3qsfYe74orJANU3xZvCoYshJGnDbfTj3zhFAy4r4ZNdmVQETsq4H7SXV71Z5goF1DkRqJZTCDb4tZwDo1htMozkX",
  "key10": "65okhC4ZkzPzFP7dtMGtPFL7hcFoBsBc54sVNy4ZJ2oP9izzZm6AGouCKtAv6r5X3HDiEqxbihLYtWjZMorVA8Pq",
  "key11": "5Ebg5TzBgKKM7tbMTjhZ7J4hxNv8pJYoPGeSFJoesAQoZPNY1rzRGNofuqzsYtoGUZckt7PBobmcqbm1jqFayytx",
  "key12": "oBrEQWVNJmgPfwSh6dVQjvK6RaytdgerA5xNNbncWxafAcBnwKNvVbNdtwCj24EZvb1p3L5Lk8vVeYhorVWB89Y",
  "key13": "2jbkNVY9yFSSYi6h9yuPBwknZNs1q4oU2AnboEXaX2tyGYkg8CnXTAzrvczwVPsLTQD4CTjtajD3LKjWkPPDC5hz",
  "key14": "52kbZS9gzVKPiassuWXa6zLrcGnkT7oEPxDPi1j7aq9uUjagK83M3E1GVrNZtEkjsGaECvB3uKfJ4y9bKntfSARu",
  "key15": "4f23S7yGb8GBnHsre14qaU9NJQqDViCVaiXbqtLHxLvyhGDERk7LfXJGQXaQqYrHNXknzCWVMAUXD3jVYKUuyf2q",
  "key16": "4XVMWXbUbFXU9rbfLdtPR7fMwzvdDXuEBsPDFt1YXgfhySZXYVoPc3Lp4CZRu7UM6XpQV3cnHXBdeounaiMcCWe5",
  "key17": "42qUG1jrzXEe5LqQ9WcDp3nfAwEiqKLJ3refKiuPscC65r7HL8mDDHQ4SehJy1veRd4yKHr9ZCPKRuYZ4yTWydsm",
  "key18": "5H9mpRsVZRyaMsrefV9ZDL9JH9KiX4R6giPSEGAFa4BWLoY8svywgKNHHoKjwXjqXWEqV8jESzUyaxzFm2z9uPsk",
  "key19": "28a7KwwghthMahvbXBhe832U1HvhSRk1SAp8T3E3gR448pyJfL7htckxoQTmhv8hoN85Kv2MS7vJuF9Uc874jsrx",
  "key20": "3QYp3uoXSShEpnnWt6ZuwYCm6fxZ7P4QMALdMqfkBnQt1nQjW3WHscXvdS9qSbTBa1hJZ6eF6XsD4cYJC561juAg",
  "key21": "429feZ4pDAzFodmdTeH4FjweXdNJpPUoNFeJCWQCEnxLm7fAba5nmF79tJKQG4eeF4tWQeVk79E2KsVzqt3jesy8",
  "key22": "dQxbu5J5Pw4JbaUWoYLaLRWbmGfZLSYDAtWxeUG4P39u5yqNeaVbYHv4QFYZjnAm15gSMjUF2FonZpGZa542ZaF",
  "key23": "3tuWDwGrYkx787WZreUgB6ohxDWm7xz8JpefrvtM64XsCmLmuhAdoqWxp4wbw3Pj8u4DsWqR2NBJbcrQaDujxgu4",
  "key24": "32tSwzDiAaVHa97sWTKCrArcv4dSiTWhGtK6KLpBjSV4y7iFJvc1VYSQ9UTxw7x8pHbSnV259zSM5RchKo6YiHsU",
  "key25": "2W165nRZdc7xd5TUSGvmEkozpJqrA3h1hBcueV5hQ26vCEE79rdP6DQNYwMiQdAEuWLs7QtBcvK2ebY4WZ3X1bW",
  "key26": "3R7KJUvbJjyVifjccUpVVt1GebBfBwuAKJnJiNYKPB1Yytt4iKSuvx1GCcBDDZ4tE2VxCBXqXMzF3nr5msSS6H3C",
  "key27": "Qx6nZ7cyYTSWD66hMpapuhspWox3BQJ1NqnE7Y21GQYxDpASrRZZ7Mci8BdN2P3RC6mnENHang8vifW6YpF1gzj",
  "key28": "K1vGp8JDcAsNkUpzGqsQHeVVvkD6jB9yRWnBcSuZb8mwo7ev4hD8TZfaytN7armTDvLTmrWnt8cSNSTDAD1P7gk",
  "key29": "3oJfAKrLDsDj5xAvAnLHxmMa3xCqn9A9WaBNbivtrJeyWWi55p6cJQSwvcy72YCzKdL6E63rkZSBrHDbWxvcdwVY",
  "key30": "44f6rRYXToU8La5icidu3DJaq8VHP9wywmnw8vMzwPm4NcKXtKds7xTwKaUBTHXaAJ1wzvvP6iEHKEagpe3gZsgN",
  "key31": "5P7wrQoUMFrcu48ycyLxNY6MBSsAMkoHUcPwVTo9dkPHVxZyfXQvEtHaTSrFXKrgko73e66L3eBUWdiFwReeZDeo",
  "key32": "2vwCzbAr7Kee6qnydeQbcTabWvmC7VmsN31dCCNRnwEw3dJZTTYJHr6kRQK1NvNjRRgWdiSJTqQ5fM1PRofqhLBS",
  "key33": "3hTwemRQ8tEUQcEdQ6Lv7fMMzfFyMMkDtod9bkE9vCfWbz71W7Y82DNXsR8f1zFyrH77xuxwopQRHjWqmhGCTzbi",
  "key34": "4NoS798YigfaL8SzRc2gvX5pjQLCRyRcB8f69ATazmx5XHUtgxwUB5AAHNAfLuosBtL5gqMht4h89B9QNwo6nW1J",
  "key35": "yNXxSWewUWs6NYLdbcg3m1DwKACK13ezeazGX2rGsKsHWUukx6ccEehyyQQq63vhtUz2JxEXGbQTpitnbC1NnRQ",
  "key36": "5XfQEayCuaNcGKPTS1QJNG34eXbABJAXcewoVdV8ZYVb3vY63XCHzn4sycckor9wpV7ZWgSdPBsoqJWe3afjvQMA",
  "key37": "5wsUJnHNBNvVK7LBZdHnqpYQzcmDw8LuKctV3if2nUUtWPERVy6FSuTMj4ZKYvwswV6Hfm1xNRWapidbV5zEp5tR",
  "key38": "25o3ULXdCu9ra7TndJ2eoe9PX7TCFQp8gDKTX2RnAsvXr7jTkZM77pa3DUJWVFZA5DLJH8cCv6EFaA7oeSYF4PyL"
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
