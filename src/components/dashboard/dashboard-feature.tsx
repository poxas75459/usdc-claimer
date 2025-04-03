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
    "KonJcpJoK8p7JokLg5s16LTTaRNonCVa6AXo17oRgtJhEah8FJ2oNuiXjyPeXVc7LzVPjDkmHABLRrYacAmRyTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rd77Hww4PZSXPutiQm8t274TK4XVdmZCYz9nCid4wZVvuhKoUZSpVz2DQDS5yxuRzZcgsxZewS5rw8ddBe5Kdbk",
  "key1": "3riNBU5qqDM52NbZLajAw7f8VS3vYnekiUVjvWWRa4153j5Wtj66EWVUQ8UvE5ymfQiRV3bC57BDXbdasmt5EhzS",
  "key2": "4ZsAEZoTiYzR9DRF5MvEhjZrUvd3mmQkiPBipLXRmETLm2h3kzVYFt3cLnM4yz5ASFMm8MiBJATfq7WmUtSL7KyS",
  "key3": "wyoRJLsGRu9hFrPex9iPpp8MSZe5ym58eoYjL8XmUneoM7m654PHskPs7DQkUTA2CFnJxHBs58TS1x3xpjJx9dT",
  "key4": "5igZ2TtfcaaKgdT9xUwaLQbLhTQMYTvfxrTmzpNRmJhHjADXeRGwWEBNmm6bUhFiCcWPa54HLry8CW1JV3LXqPai",
  "key5": "2zvKiJvkKN4VsuidiCicXPzhr1ehNUkCP9L1E2LZEYUK8GvCT8GqVezL19EosJzGbqaT99sbKCrigQi6CHey7WQw",
  "key6": "2TaetcrTt2Ps45Ccv9XP8rKwT8dqGcS8uXi6iZRe7Q8uXeqJGU12Yh7MuvbmJQwexuYGhezbGnMRi93GajAzQD5d",
  "key7": "3Nbujgwyt1VuAUyA84uSjh5t7ZefKvNSBjdEtuAgWLYYU4GzGWk75tW41BTJjE1gP2bV1W7W14FT38JXtFfnRZVq",
  "key8": "dceXpR6EWck9u1ezgMkZfH1JJdjHWEq2Hi3fPvL9m256PWWxDbRhhJXz6SZbsGVKbLjjQ3mrKd1LW42poGwLBm1",
  "key9": "5ZJRjvQszGWVvpLfPFoYRnoy2WwZ3aHKH24oXXoDdEaK9r7UmHbXAqmstXWa1jkNB8b3GP8iEPivGb8MxTUsUWcH",
  "key10": "4PZoaKdCNzsA3VweMwerACZw8mNDvzTJEwDWWMmqZqGYwsFUjGsAvjZakrhbNDR1nZDkBG3NyfbtHD5fCqGMhwLn",
  "key11": "3nysjVn8jhhYBhzL517nU1ta9gjy62jEPVUWHnG5mMkNAhQxyoNhDHHAXUP1XtxfTCZS12U47KbjFpJTRHSKxk2R",
  "key12": "EvRdvivMboTm6exQdWj7zdR2q9BwAAJeuGMdw79V1iuysiXiGXCwAysqQS3igShvATcDMuT9zSjcrGLEfmZMD2s",
  "key13": "4Eo6MevVX43rX6WGamE8Ud3fXA7DJ5e5TCYzCdEfcjDANyr39vz6A6NYcqQmmEqPSXoFvsZuJpVu8A21dpJYWKKJ",
  "key14": "4SyigsgYA69iHjiuY9MoHoqbxwZju7GVY9kPVmsh5bgzjDUYYrR4Mr6ve7wcFXQWU483nwR4vGtBUSthjx6XqhPT",
  "key15": "4jeqx32aFk9wuV4WtbuHcCduXTMCdRNDu9noVG3kW9KBdN5zkszdWHku6kbrxTwLUE2npZMZ1tjdqgX4jkZAkNu6",
  "key16": "2pNFYu82hiMkDg4Anwuy9R95d4Nje3sXnQyqi5nVVtQPeQyM1RaroFBqmiUHbqimJHzRGBFZobz6kAsuWBshYwDq",
  "key17": "52YUrVC3xKk5WDKBgEiW61nGwPHjhW9VtpbfaVcz6hPBE3UrzWoQiM2pMD9cFpPaqYGJouHfymLePyqNFeFUXwoF",
  "key18": "2JXWmVKQUULtkkx6rjyWkRf3kzfs6ZGtvUBHxU7ij813NH8XrECaLYjmDxx8dSxobRwAgC4X8UCRKThAFgtbzQqy",
  "key19": "3snkW94tiEvn2L9gK4rZLE5UBSsmD95nDiihq9YwY4LZG6GYJ79VTngTCedvBtWD8AcNSEh6QhdBQ6XVjhViQQrj",
  "key20": "5eTUbZhgz4RFC4Vgiepoq4q8jw7sYDdXdpZJT3NeVRaCwAP5myw5jzEPcyjtXz6ZSaU5cBMyLZW44Pbnfjx3mNP5",
  "key21": "2FDpNHFT2qv9nUfRrF2MzPuj9q2a63Nscc9B8qbFLpJuBzBAXZpgyrhkqkWFcVhDghKXBD1i3XoRkVMc6gvoCVAk",
  "key22": "63NftMYHb4bhS9tEq89fEeWZwniU76J51tfMDKGja3impWv7gQff6Qm4ykD9qsaMFwZQoUyAXrNs96MbTRuuT89p",
  "key23": "MztukDvxLrzrfazpyr35VADZ8w25c6Hf365gJHPnsMZiZzPj25xjES1Wr4JBB5xwb4E2tdxzFp5YM3rs6XzZNuP",
  "key24": "4bHAytMsEGdGoC8YpFEWkeFEL6Dzfn5tbrCBWWwZU4rY9oBQbpPBuGTkm2TNjtEZ3X3V9yNz5BYZYVWTru3EqMxn",
  "key25": "4nJVLJbyB9k1Ed3bNAj2QoqqjbZq6ij4KrqAZjrwALN1EXSk2UogvfjgJnYQ3LK67KD9uGRumkfGhTR97X9GxnyB",
  "key26": "4beTYz7rTuS1zhxZzME6t2JshpuzXgiozaSEFttFFvMMvY7Hhbq22qxUfdHTREov3iBi8ePUDzx1n3tavYuHRjWy",
  "key27": "4mbw9YF33KsY3Apaz4NEnr15hUMbFSVE8XhKiHADp17gn8ouLqrSyxNHS1YZo5Aqb4QXgspKfey3vxP9tZmZ6Fd5",
  "key28": "59sgT4xwZPyk3HmevqKY7PqEQkRjNp3VX98CpupDwpBFJect56WPeBfh9iKoWnScHaLEnDaFpktDFuYtvn5cQ3YU",
  "key29": "5jTyBKa2Wjzsrt6TD8EghVX7SwTFQggxrFhAb8mwavhqRoW4jdZP74Yn5NWZJWsTDbYKtcAfMLwyF2EvzncvDu7a",
  "key30": "SSMo9ndEryoYzpp46kPeZPjCykEYRcTqBgJTMBboYQTj4YfMfQjndYi4v2X7c2TRShd4ZhuFwD6yeXBg688ogiP"
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
