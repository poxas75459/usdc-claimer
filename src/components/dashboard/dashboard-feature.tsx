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
    "55mkEdQk7hnPxuV4PhosHQeHup3KvMEqayC4QxDT8NhJMU5o2LjY67NHfhP3zvPUAKgWjEgJtDLkyWekfKMom9kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VPAEF4RDpDeTdEeHmh5U7DSeqJ6HjtXqWjPnrPDaQHLkQCa7Ez6KLEyLkS4DehXiE34m1uvqJK9eaJw4xrE9qEb",
  "key1": "4vR2Q1LfT6dUDs6rT1yJncY3cP17yAACJMVtUCyYpyj1MoUvK17q6XzRXJo8X5P4D9Xd6qantukE5EXaK11tsabw",
  "key2": "WD9qkm163rxrdVCajTeUemANkVaUGMfWR4coW7DQpNKuYG4vuSARQTPj2Kba4zuGLYTgcB1QFkp7auaVt5tfG4k",
  "key3": "3tmhRmTjvw7gYGTevFHMZnPa5eFBn3G1qSyyya3uLD5TALCWgaSyxZDeKJvpLUgpJBY1cbzw1j9D7NEAoCauN6Xj",
  "key4": "4phqkovXcXTSHa2zC1a7b8UL7DcKB8awqyJVDqXc3gPJwwZKw9sdCSEh5zCFsEbhxignTmiUA5vzCfQHTXfG2iGu",
  "key5": "2wdLZNfeWFwrLCy2t9iVVGvDMFRyvQ9D9kKtGTRaohfC5EMZbNZEVvKczNgw5L9mQUYUtCduhPC6k86FHWUVW7oL",
  "key6": "xDoTVeR6a6UCrAyoPBRfMPSPwf4Riu3E4eM23uzJiQ4YECsqpQQUDeBgT2gVbdxRUuP8v5MPsyv77jAyK2rRXpQ",
  "key7": "CjrdrJLk1pSHx1J7zUZ68Rbp6mkiBR9xvGkAsnah58aPgjapuYCEARCvRrEAUr6NZQRbGRwxqv4jym19vULgHqD",
  "key8": "62JVMfCkkRU6xoSw1Zqhao6cdcrDRnSavwrCUKvgR41FwXrDkS1U7mAcnMB6vHA8BawmEQa2bUqinzuZHAqAyfEU",
  "key9": "5YatKrFARDE6eAUK1uD8Gs8bjpxetS5hD91xghjEvFZv3HgkXC8QasknoZwE6KrYavSJe62d2pSyAw8y4ojLTQ9C",
  "key10": "5vq5BTc5qJWU7tPymejDKqxrh3e65ViTmMcTrRoMCaxnbcmgtCVK4UMBpYmJMzefTcTTpCRc8T372mqb43FSy7ec",
  "key11": "3UjbU92Tp3GwM1Kqd13kbYRqmHBmssZ9oC9H4trgGbFWgpnQRznJrqqGyiaPUW5fM1DSZGLJ5N7EMWNXCGAoH79f",
  "key12": "3Ju7veUSwfhFpGp1fR57MqSnsJW8NzGaoBq5L3h51nJ5iDcuorr5bBtQZjNnVYf7XRtg6hLf4svLMYAY1Sxqk1AU",
  "key13": "3PzX9TyUYHFr5CZXm8prNCXrX3nG9wPZkBkrz7HiXTnEGNQ9n3d3nnaB9rWDWU7FcLC96cSWKGVbrNjAcp9gmDuD",
  "key14": "29xfqFZjb7XRFP15Ahd8QptWJUDjiVqBaJ8uSahkN2zEmmgDjPSCjw3vw6pLsVAzYBjNpoUVekjG4TvxK1HD86eu",
  "key15": "3DdALypiEvojtcyN28eLpcVt7cJsiA5JJuGv5qX4X7uHAXTte8T8NYaa1u75bgkMzW9WvpL27Qd7wMC3Qs6eFhu9",
  "key16": "5ykNjv1GYondF4e7hP95Nmv3oE9H9NVqNsokkSZXSEF1JC9Xe3PY6cVfx63sWkRFfD3xArYaRCRMtxUCSHZ5P74p",
  "key17": "671yTgeGcoHwo8nnsrkuZdTtgsXkziZXgbrihRqi3SLdnWQbgtdCMLxB3jowSrWvWkqyuLGvQmEe7aFmKHyYv3Uf",
  "key18": "33b1zfeD7n6rRjkmufazAteipcbFG2RcenFxrUU2jbpUkEBZ8w75gsHVs3svHAn54J6y4vJ6oNh8Jxao9BGzTN3E",
  "key19": "4MQ1Stm5Sv97SiDizf2QNrniw3HpWqZccmCRZwzZp6kT2zVRnx6LWk1tLyk6BtSimJHu6ZqJ8fLx3ChHHjfcVdrg",
  "key20": "4W2M1Lx8sxYHJsuH5GGdN1SxbSztNRz4PpRGtJDg7NdzcQ4zyucMeYoaPM4Uv2jyfvTwbgGo3DiAigbfazB2E1rd",
  "key21": "2qfiNnS7g1CVxdJTRxL8jWKRWXhERG6VkS2Q8McnrdJ4dZPvNoFRMkosc3fv2DrRnrRKzAZaAYcx3tvabVWkmyoP",
  "key22": "2jk1V3EtfA7npA3i1XzC49QBJ3kawvuJnDPJdMtE8Wbk1pJfitvis8eFA1LsobiW2yYNsND1RFv5Htu1UvyTBQM1",
  "key23": "WmPmFYU5DtWrpkHkgX1gsNQEc6ardFwZTp25SJz3P3Wt4aqFAD25DH78JCiH3f1smX3rGQGodDPpyb27DYFKbXh",
  "key24": "4XmYZZaft4kbygJkVxyACxmF8NqgCePfq3uPVdus5qcKUmtg4VRByT6RgViiA4gesfmVrd9jpzKhfyyCSbBHKLgV",
  "key25": "FLGAsfwFnpnZGKMQRP57gQSPGVQ61PKoxzniJweaHA9Jj1UWWy3hfAHdXUha9sUj7tqF6kB44Suq2S7gxb2SnrW",
  "key26": "5wSATcbS6exwep3pZLtYYnrxoLiZQYyQHXxxFErp1tZa9rqEibgyfJf5Z1CZWN98ugZSL7EKooxdjVPT9Uh7Pbo8",
  "key27": "yk4kiX9a5NjzJwDC2CEMMTKueZySYfoaQ8wcpwMz2qsEJQqKzjTCdSKy97WznuXWmEEg4gDE6DXJKsL6pKKkb5w",
  "key28": "gwjtKxvR8GG3BhuDRUm79wWVLrFSR12ER36t2MzQav4SZPocpYcAasUyHJ5T7WFzCuBdKahFBKaMfTNrHXohkqy",
  "key29": "5vxe12ZL8ucrGXEDoYVVy4dqEPkrQUzFdqddr4YDGuJANsJNmWWu62asLTaZDyPMPqVVVp3jvGGGLNRJyQgcrrij",
  "key30": "34zXDt854batBeH3VRoztKrtgkCkT24Y6D6qP9e3pMdjaa2RgitBXiAn5BRJVg2YN2kpxapBVvm6hHtKSzGxtnB4",
  "key31": "4kqVk82UDEYiSQ9kb4CYPp3t63EwTuwPS7FF4nf1ERfhZtCqDEw2uD7XpjEmy3CAFS7jghLk3Yuc5Lc7fBSBMbaf",
  "key32": "4LEj7wnoMKTEq4YZ8v6A5U3BwgdAJmktD7KvkXTvmPRKZ2TgVqdJcNp3Qy27FgUPhNnvQdgwBgSV1q4VwTgu6DQS",
  "key33": "3vBmV419NFcxM6PtXTUM5VNda6mkQvFeC3iynfobZdxThXEgfm9N5KSCpQrQhPo7MxtRgaxrGwQPTMNUAVctwf4Y",
  "key34": "S5i7pXc12Nn5V2WHVjVtGzCouKbi6mxYwFSH5PDhoxgAutbZyLeMgY2quwnfWBpaq5N9CWBXfDUWtJSSutkNjmR",
  "key35": "2AX3Y8gE3pNuUbyK6CN1WwoFHJp4nH6ATjvTYfnqyZ8e2EZvfhBeBZESRy1j3esQWbv9yith4zGcEid5pfPfU9Q7"
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
