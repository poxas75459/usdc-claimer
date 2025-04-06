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
    "2yE1W4uv2pfqQWMwzLBcYp4NHhbGVgoSo8uGRP85ehNkrmGvdNLAsA1ZVEVyXQeeuiAt9qBHn8pgKmxsuqPFyk1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ca5pRM5tw3KKC4XEn6dQnikrJWDEidxUcfWkMihAzun4BSnzb6FWGygKpDjK6KD4DxfDTBhWd9qk8Pw1UTdmfML",
  "key1": "5JVARgrvHGJQ6GSC3C4WNFk88VWchi1AV1tcGzHRtUKcyAmSMzdc861ennGufVnsk3bTsyzoMPjHT17u93gKAwrp",
  "key2": "4bLKxnSjzRTEm7Zj6gjuZHjAeQFLyZRcwAurZ6e8GJ9BPhdXCE6dyo9qdBuyQh3jFh5gT1hd5giXvc3eUjgQU6gy",
  "key3": "2sidfLapVaTUYUwTP1Mx7jLxnqojrMFRfP1SELqEVaE5BLutrKB9dgzRUWueAzd8gkwUfeTxfAGc3T2Z9wZCCH8P",
  "key4": "2x7yX4rN7qqrbeoqaoUErPfH7KymGu2ss5mz43SzVBzRKXcZ3qVDRamQaceA7NqkX7qGUv53LhAhJzNhCncJWd2Y",
  "key5": "4TcjkvmrB1dBBT1jcwHzvzUWfZixEJgFwsnv8Arties4H8PUtC42JTU6EqkvxoL1AQT4BnJb8XvAf2HDCL22Q5ic",
  "key6": "4qDp6mh5gaKaYXcF7TzpVaAQzhfg9nyw69j8RDuDn5uVbwxvFRfUCWoU4Cwo6yb3qUkNp6dxJrLZiwbBWxMXshSp",
  "key7": "636by53Znrg5wwK5ys7qYD3KWL3Fj4FQUCpx16VfHaziLgHC13xWU9zYjNSC6tNSEee1QxY2PirkV94zMUGr9qho",
  "key8": "3sYuiedKEqEhB2LHmusZxFVny8tTD5yXASFvFaiB53BhoqELwDzihzPMs7oybMfVAJJEt6E7yV4pd5gngTgbyX7u",
  "key9": "4LGHuWnKLiNss7yZ1T5pmQ2MfjH7dFy2NAs67weC1RyjwGHemXoHTREES85W5TiXeFxV8HbzJBebxzpuSjTDVhik",
  "key10": "3WwBtTco6fYARFDc3EPdzpiyMg2JnnNDgQEEaaSfoPaxAYpsF1JiwGa26HSYjPfotBJBsL3ZBecKSYyVbPh3wPGg",
  "key11": "5vFooBWiFdmbNQNkygXX6SroVCaneTejv5ykqGQbUsyuiR8dmnSMzHPctVLiv9gFjDmwnxfAmEqVXLZjEGNfKY1K",
  "key12": "xR94eKqGT6q8MztAsh96ssrv6R82DbnyGayxnjWuTGePEv7qLDt287kTgR3Y1wgicFG95M8VfXhHzGkZw6eadD2",
  "key13": "3NQ4axrmZkH4PGeDPQBDFeofPe9M2woS5CkP69V1ZU2ecee4QgwRFBH8BMtRBz9oFSEZnT17fsmKw6cUrkYiGoSH",
  "key14": "5CuRGXhWPwTxMtAwskoXEfWVKw5a78Chhknk2vWesQMpobzkDysBJYTsv2HrXotpLG4EFEVHqqHUBNWTiXzKxQ8L",
  "key15": "4oHXoqPeGjYRPtyZQnYS5p6jhBgim3JkvMX8MfS5Uo3f5WD6CdZ3ifbavHkSzyEueFXMd2cPGa5kW362AxbEtqyN",
  "key16": "3RWpigsFJxq8daCy7kSGLWUdPrnxzcPvw4rzrb5psChKNisXLsP4YZc1eq2Z8wCS8cKcgK9VN1ZWa5hA2TgJZaf2",
  "key17": "3xbKHPbBPonZERYW8iPqjiYJop38QJjMSUiWCnLqNFTTriEkjg6Fa3xgjRB9DQTW23mKqDKhJLCsjyHdf9LNeojC",
  "key18": "UkkvHJFynqarEQHPPrPShxNNXNgNVf6EVxu5XyuZGJn5jZbrSawWC5diJjes9smmFnv8VesjUVfqGqmiiNGDzEX",
  "key19": "32cLxeXGEWiTwwMqWkJ9sqYgdvVPu8epseuinUFqwhAko5C6e2ys7myzgzYqgWGBGVbvVNv26wKRKau2AZi9vbed",
  "key20": "rVUGV1VN6W4rupbJJU3gZaNJPC7BTQmUyPVogAboLr5NLw7SSGXXqtXinSXwTNKixv2m7eyYYzjFkQsV6bUjBPX",
  "key21": "one6z9JWzMHVkzifd7Y5SYRKGyQ5Sxhw2GVeNtkWVQvpWfAQHgvfPBD1KFTwQWJCWZ9uv61aTvyg47NVhY4rjQt",
  "key22": "4rhxu245zFEU7qTFCRHCGeoLb88DoDiRqoMmAGd1qpUkjZgePV5wLAGfZ5ikGwxj75f2njnvRCsxQLTYNBwA13r5",
  "key23": "2QLDZsX29tSZX7mENEoPrURnP9UKZLRVjTAoe1Lh3cNcJpdcNEoyf1BYirTbtA134tUuScmsQANQFexjiG7XYyXt",
  "key24": "2FvMW22FiVJYEWMYQKDB23fyiHZPSeWKrPbnRUvHwMqhr5MPYkAJnc4Z7tZyuVfggwBUNPvnE4W6dvyN5hT7Uj3P",
  "key25": "3xrw71xoLCZXhd4ejUCqjdFrZPm1HFXBzo4jfVbBYVtjzNxjjjsSW7gk7V1N3x9w9rvJVd77sX2u5WyW1hpYkD4K",
  "key26": "3ffnkG1qz22AsaA5Gdw7w9tqbcQonS7vKqHahSkqDYBdz7oxKMC5YADG4pDP3joSAnqFyx5ux47bspxX12PvJnc1",
  "key27": "2qLVmibuQpkxxoy2se9MTYwaRXJGzsvHCtndNZMjen3jjgfnXgQF8hJCprEchh42L2oQx6zyrh5FgtWFZzkvUcRn",
  "key28": "2rKVNMiZC1WDD8cTWsFWykB53GWevuLGc2KD195JZpNGXHNCrmEPeX4Sfwhk2zw3Q86nqzozrPJxHXRtW5WLEzdB",
  "key29": "4mFec1y94QtLVQQrzqpjsRapezDvpJiJ5gZVsf9Ta8nXbmJ7Lbg3xVbBECfhSxxZFEcoGoo4RwMxeZ4AqXStLysx",
  "key30": "bKUmyQfsh9gudQAeJtXdnuR5JCEFGxRTbwBz8kcQyTkgV4fjPdjV6kdbgjsyR5XcEP4M7hoafruXsoYDePiQaVA"
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
