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
    "2K1b4KULBXHRmozgWtsTt3GyLg2QBp3kJq15rR4zVyyqVSYz8D5bHLrGAqRnAaXfWF2nL4gcK6Tig54m3aFRc2tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7fAaQVHXGwGecpVUnyvS66hu7hG6UzNos5q57dzMMQdrUb7g13unatzepELczt8RRswTt92gnwsDTAgizkHjbup",
  "key1": "42js93qfHgZ2LRK4NLTGMpeSU8Qdmad7bRB2nezUoAv1PWnStpxvXwFf5c822JCT4w7KeuExYYhtZVAxcZYwXVVA",
  "key2": "j6MU1F8JmQFHnmziepvWUYFLfmW2uLR4vU1r3aHYGvRGnAcFhJGovV9TuGaYk2Jm1dTosgaHqpmo1aLDLzpKC1j",
  "key3": "2cZrM3wajckfTVF3jYrGmxr1PHT9qejBGRJRmT6TaRe6Yscif5wonYkcVefXMHSZzHYd9gCKGm3W8YWiPcRWY8q6",
  "key4": "2qxxtfoaYY5zhsyAacD1LdbQja8JAP2XFGuMpaRoZUCcfqvE2Esg6EFCKFWbCA9u1bcqhJcDYYn9upfp9EPjaZAB",
  "key5": "3YbfXbTtJJtRuWLdG4hCLeaZfaPKEr3ECApHKva1TiX7oiionihuiRiVzpPhsL8suhzttL52MWWkA9WCDA2eHCDa",
  "key6": "2g9FieJby7cMhcSwfbSuQQBWgMEfHAJuwv2GieiGRwK88WZ3iyvDUvaSNHX1XuP2mnRR5AxVJN4dgaBnHTJsRmch",
  "key7": "5oGMJKzHmM1EJC3xpkHN3EXeCLGHtEWRAWeYAk5ERpnN8NTULv83pU8ocZkVWNhdC4pqFbuvcinQgWbBjr8xuRMj",
  "key8": "cPaPaai6PBUA6kXxffi57rmx5XwMpQeL4QuUhW3d2eui1uSdZnG3mJ1uh832CpmqnMdf3GXdzxrjS5DkrKdH61h",
  "key9": "2LnD1JPvZ2xLe5nvMGxoVS4sB1vp3at4odZ68Meqeygzq2q6EkLGZF31kMnCEoJDUKQ7uTPHyYxsj5n4zcXSH7NZ",
  "key10": "35jubW1rSsQNtPJ7ns3bv3yxDNt76D8BCsVkryuMViEnnsfJ6eDCqESDUJhF4oCtp28JgBDnMzTz2gQPS7Zc2jY7",
  "key11": "2VbMcMLkz7i3CVcJZho8ovmhm7jpX3czySApdfbFUZsiR8Q7kcKqztFaoszE9FRNtAmpJKWc4MhyW46saf9pWueb",
  "key12": "25sqt7PSrSroy68N6NnBbw62AWqN4kxkL7nTcW6yT1iFRn3kFSRBM22CyEiPQdFi2pzw3xfUpGQgR6A4iMN7SFQg",
  "key13": "53EUbjBSu6FicDJww8h5qCVMrEn1r7dCkaeJHNGHTPTiLmerBJrwtFEaRo1pa1wEyy1Wa7WgCM1ZdhWcK898DU1M",
  "key14": "Ur2T47Tt7y9vF4SKYwyD5gi8aaDKoxBpqsybAhuq2kCybTaTTPD6tyiQntS1rQHx4jshb8dxNPN6wHxXwcqphHL",
  "key15": "JMNsHQfm1B7GEYbTEZqRFYDHxywqhhG4ncJCyoh6MZFZfp4VRocZNqW6GH2pkuAjykPp98veZKJ5snwP2KFzsXc",
  "key16": "2LGeJ3QD6Yeyc3yGofjMWMNFT93cMJUm1WJukpyS85zM1fCYYXxw2uoyuhRkD2y8JJncBAxkCXpHXDPPw6v8Ex2P",
  "key17": "2wMHxFJMQ2Zx6TbVMrYFfbSuRWC5VrN5ZEMG7TroB5hgBKFeGQnDoniYW1JEsHkV6dY2dzbsqq7qDFNMahgHBJNQ",
  "key18": "3DTZJfKundWkrziCHfQSSUhkB21WHv1Wm3fcvMUKt2uX9LCb7GxtCjaVofCjo55tS3cqjhq31SjEpF4wcJb398sx",
  "key19": "2ipPGVYC8zvwQMKUPNUe5YBCM1Bh7hkupochZJ1CWLsETAHAtVpRmsHUP6jvySBBc8mh4vxwEHGoriRkMwDRfetK",
  "key20": "KBr7auPUvjjjagwPPb7ztUW19h8JnLdD4Nnfbuc8ZJmggqmbw4GhgEVSAKPs7ruWrn1bzAboFx2JAwJByPZeMZi",
  "key21": "4JHNP36KeQATwZmCFwytc6YHFt78fCRC7Exy9WUMfoXPaqKCx5VugJ6Abo4tVG3csU1ZTiTVMgyjVsvphEhJ5YFm",
  "key22": "64het8NF6wiLy1JeRDLV5jinS24VodSDZcjtajAngNFhAPdLevZhMpg9bu4FzYbckQU5LeNjSo2SqkppTR9pDnx8",
  "key23": "2ATfEGKFPDRnUZTrdsER4nmGCeLBu1nS7wiMgQVnTRaUZWkLfzYAxCLTqRVCspQVAQoHsNNfVFsgLqxTKQFLeqsa",
  "key24": "4Ky6vz2LtDTp5wF9EZJ3iToih13ntRxJxASkYNvuE4X7b2JHEtRfFaa86kStGnd2XspKGDt9yXDWwchmQVfU88MQ",
  "key25": "5NDBV3tQqbdjgkY2KSQmio6rQPuEuKsSc1grkQMBG4HzAhN7c86mtgQ9c2WyX6D7JX1NabEP8hxVKcRrLFVS4Lht",
  "key26": "56Xg4jnxUgirpkKEhvXDAkaou5Ww8eXncBzfYHSCtsTfZgPGANMDoCQgic88yD2zQgbiHWZDwPR9qPVXuLz7u2f4",
  "key27": "34oXbkWqGDfxfsbm1sPZsRSuhEmizyqTx7qHrLoMN3psTBP8aFNdSENN5s79uzzTgxGhvagixeJSDsFTeAEA8eTm",
  "key28": "dT1H3v3iA3B1G3torMsAYjHQc51Gee3MdnNPhVct8zUXSDC8VQU5KLo9qrrFVrWJYMiYhxK2uTUzfX58Yxa73B3",
  "key29": "3QaFbqsB3z135G2FY3PiUP9umtCmaH4quH8JNRpq3e3sVycwn8dQUNdV2Ae2CYENp9S3j66ZHBj7oziM85u9VhNJ",
  "key30": "AW82cKS2gYU5kGfviTpKmpsHVyf36eo8kdH1nGSdHk1MyhyeAhPMe9iLX15yP1M9dZRNv61Ecd7AmPvbYx5KSHi",
  "key31": "4Wx58XL3zzfm1FmVFh6LoFebwDtDTv97tACyDzDRDqCpmaE7TGbRJHXwsD2SAWUFVsvNNkPZYVpfooVJCbpMhTUM",
  "key32": "455nFdmpcfU7foCh8HXKwYpUMPCiCoaLyasxd14jAc7B3RYj8n12HbohxymREw2G2yP35hFhy1bSz7YrTp3Xjmd8",
  "key33": "41EkD9RFf8XHC3wogPqwV1H2WAEQWPBN7VtZxXbDy4AFjvd1RE5zwXP5aTW8YecfAmEm2koYDDcMM8UZBDo5bFx4",
  "key34": "672GjoKrYkq9TwsGgRK6diA8Tnv8mqZXFA52AgHeRJZdTbJCXhZdNsAwEDwFvFcTHE6SdpyTNPeJhd6Sr2wsDQgV"
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
