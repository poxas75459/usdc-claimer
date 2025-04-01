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
    "3VFD5W7CdqoV2kzei43KTTz4cN6L8wZJuRSAfARMYoQdjCDQXukaUfnA92z96fuLDBTQy3NjvRhUrppQXuSTv7kB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7qV4ogr2fizm3bJbbyCx4WszM1qRNcDxMbKn5EGLJ1HcxbD9mHzwi8jvc9JsmXPVMns6Rwm9XRECCSPGyyKyz7h",
  "key1": "7HhkYi7M5Mo11o3vRCr9vE4dwZusjyQcoFDFBRViAmG82m92HM11UBURFTT75bKtMJshjosMYMJTjBrZARBNw7B",
  "key2": "5fHLGJfejccKCCu9A92WYdKKqUBcp6EhnbqAf7aXNJeuj6t5qQaraYSeMikbS7XeEsapekuF8hKzx5dMrTHNNxcC",
  "key3": "5jmtKx9ZXCYqVkyPmb6wkZ8mpwWtycQ352wg9ogj7vGb7ALqBPtHE86jXBhc3KW2RsNTRnBaGH7cgAntuptwUKHh",
  "key4": "5165BXrC2zLU5FzgWnHHyKsR1HpJq9bYniRRkPn75Ar8ZRph2hmCJUyXekzDcdCaRSCGsLEqtXtMBRwUfYUrXvqD",
  "key5": "3cydAL4uwDHdi2EpKT9vwVfbFNB3yEwX52w67QN27AsEcjZiBaRaRTBS7264Rr45XnoqwZYcnuQQKo4p3AARFoq",
  "key6": "2k3BejGGQjrgbczqG4mxHUsdGtNHhKNBbxPmRbUqCHeG9K1Teqtk6o1LKuPChiY4bfoBtmieN3ThJPaXjz4q6m4c",
  "key7": "3fr9LqZiwAEKhBDWPsuoYCtmMJgszxmyA57YpYLcqwB2HKHozz4urwgzdGJTRFjyGx8RibPYNppb3uUMGfRG2way",
  "key8": "5qAz95qhRr1TPQM19fTxWaPW3RZ8CZiK1asUPet4PDhhsjFb61HqsHadPCJ9dGKiUi3j6bBKN4eKEJpcwo4uAFXf",
  "key9": "SKqqUoJoqtuGCBfBSP88gi1sKwccg8rLv87odMSuagpJbRm8j2WzT6mqsvx8avfu3uARY6ZcospbLerMg7TV42m",
  "key10": "jBw2SRKxS5c9gSyNLiEeLPgARH9NXHF5qsfCakA93SVBvAAKpTpk6oLwTLy8WVtuWNRX67ejrhB92J9frRKf7bu",
  "key11": "5fkycW9WCwttEyzV91L7e3wBxK2kQ7WESjRwQeSUvUEKw3qMSNLgmunVqi4wHgg4FtvtjZthSHjLpzwV5nhdLnBF",
  "key12": "w1zwStNmtGMUgpoaBKsXZT6qPof9zX1vnTDmA2ZmnQnjmAKYUYv4nzQE7uguxS6d5iP9nk2phnVTGFEyqCsqvhL",
  "key13": "9GUghNXmcjqZeTDHn6BBueykpP2rDarxixV3HLabfd4ZcZyiejeUa4gKEtWvsTuhrEm7uFzkfXKhT21TgbHZSuJ",
  "key14": "4MF9hHKruYeT6jR7e5J9tGek1At1wGYH19oUpfEywDHpR7cSX76i5SnWVghUpaj8ypu6BCSfypJxqJ5JsJDhzzar",
  "key15": "4SgsK7n91Prq5ZGgmCzBYFsXAYyNHVNzrZM63hRBwWh9HdbGWL8PWL6GVkVpkDe9fzJgdo1cxZ9Xf5i2jWbgWCWN",
  "key16": "wMEuJHNn7aFjMFuaF8uBxpB45dWBX6wnMy98uNz8WgeHspwGSnStPiXwhpmZauWCFaD9Kg8ZotD7wVdbRSvVyjC",
  "key17": "4XZU9ZpYSjp1oozQNHuxcmuj1y7iYUDWt4KC1AZeZJVYRfMvMY1UMgC4Sk6UfDRoXs1EEChAjBSkguiwaZ6RPnjZ",
  "key18": "9qkSEfEm9epidjtV9YXbVaJivVNxkAq4Lv1tJhFtydAYz77nayxXBWyc3BwENpdoJyyiCCPw6ykrjDiaMbAw7mm",
  "key19": "3q8SNMxc8wFsPvDhWCjGm2tf1nXfJRdaS87LQwYX6Q71eRiN1uhqAzyoPiSrK4soRnwT5CgW1HCHJcihF8YcuT7Q",
  "key20": "n5oc3GdpSzT1FtVHFhYdTGbwTQuNGydEtmXwGw6TyPdqU8PnGGqCsrMTsAxvqBdEyzm3xkqPWCKSQreXGMWssvF",
  "key21": "2yzJvPnWEG2x1fLyKAzmoYRxWoUoxvoyTHGsMxDNk39QFyKW7hZu2K3zTj9LiVQFaCB3tjibVFCX3GiqrwvuXEHh",
  "key22": "4B1U3EUZUAS926HXiuaPL1kubpoa6qmbZnB1cyyPXTgeru3z6RWFiJbMwxx49Zs7zrSpWqcXrQuaHJmkxhrgMNDC",
  "key23": "MzxPUCPF1d9NpbyXSJUwHqXxsS4GQhp2frGLTUgNMvLwD8DPS8FszgFTJZLQZoWh2XFXHwTv6ExQc8nRh55BH8q",
  "key24": "2Wn9U4g8Cq8TRmyVeSNmHMtKR9XuHFWP5x8dELmiEMQm1VRrLKUkpTcjm8hc6BBY4deTXEXteq4Z5n5NoRZbegbs",
  "key25": "2WaCCbB5ev1vmpCF6m6aJ2Whpjxo1veERbAcWi5p1GgQhbWkocBnPC6cKB41ZmQwvENGLzmwFoPYNgNWK6aiXpia",
  "key26": "cXAfkbQqKRoeU3cDPmvkaf5GhHaeEdasRZyReEMGnKK1bBByY2Jpfjc8M4nYxsGG71sFr4KW1dQSYreePFvTLWV"
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
