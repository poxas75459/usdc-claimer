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
    "2oNJA33YpJDLJZ6uPpDFKNHhWhDHESL98oCJpuW6yS5SEbL6uB24hYGwja9fZmFULjAqErkQzgVMvpU56aRufh2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r8h6w2tsaru7ohCvvHUP7RU7FfrxYbPnHKm1qVYP23S2rPFfnZ3hqNiBk7i4RjGN6CjM5Jng5w96km4J2TbrydV",
  "key1": "ML9idfLd5WyALMPonewyKMLxpag3qjgUUPFqanesUrKD6BZnXePj25m4LuNH3qP2tUbZDZNRJaJ8n6ygLFLK3x6",
  "key2": "356TgWBaU9sFZ6wHuv9L2Trp7FGy5REBDipesWvnRr6VT5BJocM4Ae8D63kbfcmKGjyJk1z5VWB1315eDiuJZ3d8",
  "key3": "48DswLaKV5DLNy2sMpxZvPXTVs37CVHfs71WdPrM9btPkVT1z3jGREcdn3gyhEjVbxGpQ6QKNAavybAQQNQrqmSQ",
  "key4": "2cJBH3Lm9whRgmSNYpjj6rkWGgFPXrBjpzYHvwuZWzqwU9gJgWSGMZbzmDzxvSLyLSVo6AKgiVe8JejKZCxJC7iR",
  "key5": "4aahVqMMnVcvesYhDZADkDpZzwJWur7379aUa6WDtHRgCobtLJCr6Dt8QKjPL5HqqcfJz8gfT4GJxsEN5xSyFpst",
  "key6": "4p4QFiM7KPsWK4AgdaDgBwGZ57vrpvUX3oQoRengAGd8TqWjbvCtsTQG4JEr1XuWjYgVsg3g3eor4Lr9f4px4CX5",
  "key7": "gbkiRGo3W5gpxQd7H9vCkN3D56StBWEKGxGoicDXgs1a3PoYKq7Rkcarp1VSFXFTgbiu6ogo56QGS3yPWS3czoD",
  "key8": "3Y9fMWAKD31vdFJAVNJZgCrHFUCFku9bWFzCVK43ykwkzW8MHAsgUtzr3ZDBavLXfqtZnyEFESCBNRTPfwVn5KCi",
  "key9": "2MrMGA5oAJhDdZVRkJEvNkC7h5mRdhz9SnyxKYjVA1SsWXBqrstvzwkFKR7ySgBRKw4XHBK2gEJHyDrxLavbZLrF",
  "key10": "NjGkb1XRAHhg2zUzKGA8uRbiJ3oe17712zS7UUJxKw85bWujgZBYy2wSpPFyv25hmQniRjqYgYdt242D4ZysjcP",
  "key11": "agREk9cxu4xkp4EfH9wUALFQHZdJttjHwKJ9XBQY6jtKxNJ999HDob3QvGaZG9QN2eo2b8nkiBPmYVqdD6ufYDa",
  "key12": "4D154NbU53kq5TY7wcKne2LdEj5A3gJShYj7WjC8UuzSak36cqmU3s8QdFD6rELvgktkrgXxaRPmReiZdursLkgd",
  "key13": "3NXwgfwxpmecHYYTS7U9NcYhjx2dCcWwKAyesZN7yebiRajTtuPW5Dh2fi8P2EEM57kGjEP52MEZcxpLFKhDGmLd",
  "key14": "64SDWvV5W7Ws4DfH4qtbrTtfTctV8rtivWRHASU19m9k3QVxQAhbiT4MPXHDMF5TjiArHKykH2De5jakoYJQwCFN",
  "key15": "4FEzbQYdx2wo6CPRH9pTZ3jXVM8S1k9tZbjN9trYRknVVKaFb93TyeS4g9SHd8sogB5vwgpgbXKRvHGU7wtfky1r",
  "key16": "2H9rVCfGt3nx2qY3zhCQtqEphHyAoTsEJ34PC7vDQYNxjRRBAyvUBn6fHq2uewQxVdsjNP3Eczcco2BEQaD7Vihy",
  "key17": "2z4HCZHKe3WkAZGYmirsEaifhLYWdUw5DSZgZp3RmVimoiLbezo1s9wEtJ1rtZiNGTiqQMNkduhAFeZmoiq9YJcC",
  "key18": "26sW93JdPnTfwfNdzNmVwqonDPHiiMzhiPFUkaMY9BnbBaJrRYyJ8jjRb62kNypBJScg3uK5e5DJ7XfdGePH24vN",
  "key19": "9PesMevFNNrMebj7tTeCVxyrzWroGwix7T8EwqNZC1Rdag3QwCboHWGq6Y2JdttuQegKCCRh3t7UnVrNG9t7btH",
  "key20": "2VE7ZkX9ua76kHEu2ipVyzCK67DCjXF35xj8uTwpG6cuvqtLhm38Lnf6xWJKgTW2nvRgJ6uERrx8c2kxKv3RQB9J",
  "key21": "49tjjwmLafBPsfPA3xCccf3j7U5uEbEQypSz8rfEUoX7FMREXDxJremS2UnN2ZDhLdJAK3eboacda7LToVUGhFov",
  "key22": "z9U3Wzg6wQuLwisB725BYhmj233ocX7Pcc55c3RVvKM1Fbzpmv24qKgt4oEQoZeUuzKGj9apKxYoAsfaDkD4eFx",
  "key23": "4ee5EyFdFtr4HUWagp5oibejjCLGugugn4S1DBG45rCGcrAy43AbGz5JtJEJSCJZd8Yx3wSbGtxHaNfWFx7Aygq2",
  "key24": "4M3qDmAx9hfjerA1fYzi6Gbh3KAg914kgmPka4AtNni3oe7J47seHfkf1frNhC7MM8MZgQC3g1nCBv1rN2LGYiVb",
  "key25": "5uo4e2jZHYHL1inW3ZesFkc11tATBL12rPeCWBSUFVQtsekkyKN3CMx4t8CmUixa3UjRtoygpiujx5c44PkpGkkM",
  "key26": "2tyCbQfKbNBxfsuT9RrznhuXg4vSByxtAr2m1cSstai9tAceuuqnC5RD2N6sxSZ7tjkQoDcqqivUEJoAz8HBkhRn",
  "key27": "5BtExTc2aBfDGBtwXWSAq77YWDK8vC529nW9EK3vWJ8Cb55rd27hPaMCXBj3Qv43zzzGaqj5nAtAQZ3TvPQSkaRV",
  "key28": "63a9Py7WiWG6NYcytZxm4VmcqGXZxY6DqE5THw2dBDS8F63xCHNtX4xaXqRqQTtvcdEXvRs3xZLB6mdiVDmJYYwp",
  "key29": "4KfzGX7uEPHcsMRnwb7r6hNboFrvZHsdC7tLqSoL2H1eDtRBi42PVfMB7Jya6LaHXA6UwFNR4DbtMNcZzknE3eyK",
  "key30": "5UJawFW9SM52fNcg36LYUWyM11CjyjDuWfM8vD7iLh6rX9My53gV3eaoaSE76KKnH92EVPAyukeqoTmEz52yXLio"
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
