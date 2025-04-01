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
    "5ySz1TpGVPmEbCCjsoFzGWrLLQHCkxui3mACjynVKFbbVnaYCXiUSnxj4xFdwkJ2UmPdV1U9YK65beuQhbYCakoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7XyMdkNc4cLdWz8wJXV4NJrkJTScAGQ35bJWUjPydUgimqcdUFDt5X3pt42EyTPLLJN2bnkB6BN8WtdzWEetPk",
  "key1": "35F3oRD9hu9QYaNHrKeih8PuUXheDs49Lin5TkATeJC27bhgwhEabK1xweh6Kc5zrqRutxT75unWXfJQ9oADMx3r",
  "key2": "yoykfMMPb2E65Dk9ZxPnkMtonEYFtvuM7yUhdzgkDvN2m8danJ4BfxX5HaaaV9Cc2S7WfaMyKYW5EL5MVrRcJwi",
  "key3": "39V6LCoivJvAiWnkympzLzqJDHs53j15BT32Ds4V5LEDUbUjsESTWL1q12eNETVPEx5sbNXPqAZkpGEMLgFTmY2d",
  "key4": "4i7ZjGmUAkDsfsXt9AZbsNMiRrGwtLrBE1HCMmpeASCsnKGv41oLhvpejtdbGKULinRnWfQrNHZdv9fHGfsuZUQe",
  "key5": "4CvFZ6BSrdHwAz2ZzGMtf29LH7Ya2TKor9C3XFr4Rp4cvXsoE1VZGeWAhTe8aKi8Vz44gmf3n5eBv6Mk3Vn4qkkH",
  "key6": "ZEheBK2bFSA6BZGkhPMVmpG54e3mhgJDeV6u4XUfQsokQQ8Pifc3kSbor6RQ4yewQjM2ymcteDD8hNJfocfzTQX",
  "key7": "35P92qLUxdJDCY3Bu1TdYF9L19fkrB2CLkPciGx8Z3KA3aqecSiuKJRd7BwDmxNzE7rA92htmMTxhY1URk6sweXY",
  "key8": "5gBhM1LTqAoi8taq4t4poMSmmocejWhPgJng4XwJ1RLhiyvRiyAcf5P84saBcjdtc9hnBGozC5bvvbD1fV6KWvfC",
  "key9": "3L3WfHAgki9KRRkVDm8Pmm2hqJ14YmDmDXmkpmjHGhtHGDMP9rGdjpnysdqVXXXoCeKzLrmG2Ldsasbb3AADgm6S",
  "key10": "5X9etxrC8UoEc96FbkwpwNcHv3iyWgHZdHcSmp2rqkaEhBXk516u4dgojYjnn1cEWG7rwJEEgAHoXrgjaam2Tiwk",
  "key11": "3tFakZuoJBuVqCJYXJ8FBMquKc5epFdPBBUNokxfM6Ej7Gc1kK8nqT4GfMntUnWfhpndd4Cq4NVwZi6bXv1NbqAa",
  "key12": "2k6CLTYwcZeHKegsphCRuXEAptGS6qkAZmVJjCW1htSWeXHi6wKco3CQodRE7ZQBnW15DXMxS2fXtWNcdUrjeoD8",
  "key13": "2zrjVbBA736m8oQDS6JU2ophWZdBxHqsahdx7yn4CZWHPPM3CzibdcEjuZmNwpMfxSSCpjUksqZTy7jkcBTzzfd6",
  "key14": "5SGR1EbkTa4UFFb7Xzz7smFGNuz3Bm7iRLsbpSDXBDnRwq694CRpD48PJMcSGY9FyTXkgNhSHcRdJZVHpE7KAe5S",
  "key15": "3CPxeUJQ8ZThfzfjw4S21QLG7QX8NszRRu7342np2tpBxXCfXkQWWrD3RakiAW1KkNHvmXmSbZjjgYXtsvF41XvM",
  "key16": "buCdcQkDKpaNEXjL6bDpbWRd9Sy6hRUCjG9YoNfEQAWfWxxygS7shtECxPCq1TmEVAcPwyXe49AgaVhyGHDBPpQ",
  "key17": "2A2JUXetXgo56t1ogoxiXnqhkgHPZV4niwbmidxUqHht4cAEdFk5bw7iPKW2sNjrQYvSWRBU7Zou2CLrD6ieX8TR",
  "key18": "36mxTwhow2HEJf2PKQythKxDXUTSzU3xCC9T88dPShTJEqAstowBtpAKTfUmG319cF2pitR2AzwnsAhN1eUtm8Z2",
  "key19": "2aaYZcjZQ6QWPNVt4JhtUhKXxmXEzkYbEoracoK8QfHzwUzaFo1e1bNjhJVQAyEnQdcUkr1RBc1qjnEQfyVTXsVT",
  "key20": "3u6hmoexZ2X1QrrgotqzyZ64c3trBk63nKDi7iNRZAREic99fA3PkpcpopVvLELbFMmFDEac4hNMvhmyRXe7sRJ2",
  "key21": "3w45NX4PLE5yeyaE7Hfij5adcm7hrekDeuhHWFao1wDAjCLeusYrz44CtaJznawf9f2ReAdQE3gZfeKVopAiwNyC",
  "key22": "3RLhmfxWV5QstWeiaZJL4RhdS419c9Wg4yhMu49UkWscEEFrQiWXMyv6X9nDgMebF4mYdYh5dg5BsgxW79dz99E",
  "key23": "HqQmDbXcDPfiN969Sb5xipuH6mmizFsFNFzUgxM3yjsbzBVGtazeCJJvGyVWAPAHJ9vCcDdijy9MRcw9DDtFdxF",
  "key24": "3yy4pmXyXWSc2xF3GNS8ewT2qESRUrN7tnjnC2WFHRQ4QzRysWARiiAEooVcVSdY4bpvxpp12tAdLUKNhyaV37Fh",
  "key25": "4Uk3wnLUF4w1ZGVpnMT58dmmUBHNk8AsTw1EQfzD4u5XeJ32pzEGsxFmXaoCkRdQYxuDYQhfPV2wfrz79QsJAhJY",
  "key26": "cfifinZ9NNcSWnqzujrbztEeBp1WSUfPwzdfpirWFNsKKtwcskAYQJ8MLrgigkbKMqDz4TCGo7fuM99LxyqqbRe",
  "key27": "4H6E1jzCnJMJaYBVzTb4cVvz7SUqAf1eLd2NmPWr6nfYBhAB3kjoGg6r9jTRphXc3ErrRBEuPEv8uubUGFB6NeHV",
  "key28": "sam9ziZXiwj6hSbehQFfj33tZTRH2y7HsqPnXrCJ3dPvJN42y6DqbeVhgvBvUrFLsaGRx8jrcwYxF8Z4422KPpa",
  "key29": "3CVHHZy7dcjzyQ8hUFaB3dECgV1KU2uUKnLa6qqm7ad56ew3P73mQ8WvW4FiUxp9X7D7zjZanfHLx2LeexZU896x",
  "key30": "52W6fwxDVgw6jmAaztmtQTSpapFCJP3h6v7LNysdWmUuBdxan1462r7PMysKEENXojxgBK3jVdnyHKMub3iS7zz4",
  "key31": "3L37hJUhpzBud2BHx2ewQRS8Ccz2ie3dKGEYmRDGY1yCBFadmEGKhQwzUL2uSoYaPMDu3YvRhGfwN9n74Z97TnqQ",
  "key32": "4pAZmaKqNYFxyJKD7R3NAS9kpKuvm48DwAUQo1ZEioUNxRAgzt52Ttjmq5q1cE5NGdwj6Y58wtiZUG59MW4VkGrJ",
  "key33": "3Y9ixqdZZLhVkc92oRkNnLmSMHz5kG9Au3sCQN4t637JphyvD9hGC5j8anQBHBVfFUT34hy8HfbebLqL4A5jHpLR",
  "key34": "2kHt9jtNZ7QKmbdQq923fRj5LE4MTNXE5Jz7izfYbCrsjkvMe6ULj6cZ9N56K1Nur5KdsUSma3YfBrnpvzXd2L1F",
  "key35": "52YxfBmVNYVhpn83EqgcwuRKZUp7sB59Xh49inD9CcyQ2Wiv6MP5w2RTtLT76uSwXDUBtRYc5R9JBmkHtpjo6py7",
  "key36": "hLumPBpWUUo98JqNQTG9asmfqzTMncpJrwbnjT7vsGgPE8rLC9jLyB7x9EqLgdy52SmwSCC7P8CaVdoRz6kuUDn"
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
