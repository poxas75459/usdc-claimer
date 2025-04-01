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
    "marHo83expMZ4LqrQQWtWRvTZvKs4MoJycNcWPV4bUxaiLRxP2EELLAy7qmbsUqnpY1b7jzsiUbyQMqrtsdVtan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i6bsRZGoib38kPZkNKjZEZi378Y7uLc6UG6rdzj19EM6GuYmXqu9WjGdMMM4dzf99m8JnrnksdW9Nofp26N7xu9",
  "key1": "2fkjEhKDUvJ1q7HGUYXxqPuAzrUutR8FpXWmp15N1cquxCyCoGuZk8LCRnjFDtwmhPP1GbWmhWbGVgW1VM9nBHC6",
  "key2": "iyoNv2KKwgHeV4oxQT2asogJ3QFrt35ZU3sedtN71GhDNwZyMyKGfJ3Swm9ypyDccxP6C1hMbmqoreQ7M53eLWC",
  "key3": "2LoMtao3hhGr9hFtCSsoZdrRytJDfdpTpumys28rExCShubtGvo5HCeWUE5oXRcajA3G18VNV4dv2Sxzy5QcHcJu",
  "key4": "UUrd6inv7tiqbKCziMucGrca81x486yJSLNaKu4641HtfjXERt9WVv2JmuRHgUu5bnNYDfBv3yt5N1kA41E5szy",
  "key5": "33Ptb7fnBuRDPXDagUVksGyuPSQyzZAsyNcWKtT3BSathkLVPp3usnigkdKhfWxWRSRxfprgMKJFsMv9PvJy8BWw",
  "key6": "65xii6U6YCrZgVmTgpEtMH2C7Ycq5FprQguipJHVNfKxuZoajE4p7BCEWkpAP5fj1Dc8dYVuH4rxCyyanx1TZD6D",
  "key7": "XqVVhGqe5RCCHfFkZHZc9SyTb9RSYkum9mwn3TTvhhcs2iW5WJi3JHzQWyWishQYyp3bPM8iJcydtx6aDGPgLaY",
  "key8": "v4fuZkVnA5oxVtDkWaT7aUSEpZvHhkV8xTQacDBu4kVzZW2hzaWWUtjTMXZxSt5jWa3ZumZDEVVrVVtJxF9KuM3",
  "key9": "2euE9cu1tPuKJbGYzhpdu4Z8Cs9s3p4St4R7SSnqYsacPznYPKg6H6cQfWuZBcT4DjFi4Nvf8S6SgFvmEYH6p7TF",
  "key10": "u7MLPMioZyBJ1HsBJBvpePeJcX8WhkGsjYv9VDaVUBkGodocYbGmTgJbXVko7iEnf8UH4YDuKswdaLoLKbVddEt",
  "key11": "3QykDhBsKPdGP5D4X5viUbBjYue3k9PvFjiHq1xTgDKPGmkjhpp3oiZNPMgn8FTKDhsBcFYGzPjDfiUT8XCEpXEK",
  "key12": "3vRgbckBuqLqeRqgxwanDnrrixKQfNNETcZb6SDGi1qL4nEwcfJeuZRqF4AHmoaKCmz4yVXGw9xmKc7Kx29Ed2Ws",
  "key13": "QQ9SWBCZehNMvQ7FwQqupS4i1z8ryGBDbDUDDKBrnsDTUQvJy1EjDVwsV3Z8b9fd8RTKTH7UXJr7seRTtXQ6oxu",
  "key14": "2xi8kWXnwEfxumdpEfgiC5H9rQx9cRqgd7geZCm5U4YBbNY7Z8zsghrVXppyxGzP6f9AbtvAdmpW1CTFLWRF7nXT",
  "key15": "3Lt3fv8WiHmLT4k5eWxU9cD11dcFnCf2T14AC1pH4CtL4cz1pVvfNCDtUWU3dDPnNsxjnEPvStR7u43yBiW19qTZ",
  "key16": "4bmdLAGzfNWnA7sUk94ntRY2tEAzbWLSx2DDGhye4V8F1QoDRuora5XkNnDJccJ2jchSB9qN91upe4VKtmxLi6FJ",
  "key17": "64mGDhrmczpEnpWru6C1r3hXxg3GqPjNvWapSrF8KRUc2pMUcJdPBSWxxMd7hnEWw8jEwXMeKLVEtK2e3WyKvAeb",
  "key18": "2uVwHAZ6qMiZ8Q4a8B8caVBVx34Pm7epagWZjGmrNkqvZ276dVG6st6jtgKEV8bZUWWRamig8J5bVYPoh7ggoxM8",
  "key19": "4Ljt5yXpKJkf24zQop4nRCRHL59RP1eGEpBYfmzATmwjmttXyEYxWYtznQT9LPc7dS6TYH9Hq6vranzNBrqassNC",
  "key20": "2CUocHhccr9CydVXH22NP7b4st5F4SCDbAMkTUj14T5Rsop3YbuF3uAt9yxBNmrEbLyVefmk1tiiLuNjqvnPn77T",
  "key21": "4aW4EAZzWC3o3wcRBnpi29oijoN3EwokkEWj6ef79G6h6G8uCD9G1yi5wLdVHTWdTKaSRMKBuessm6JSLqCAFToC",
  "key22": "2oL8CGQTowHpcFUMd84WE1aqvxgtWHk7WXwoaqW39tdd1LMjuQtVZVi1ntsS162CGmN7U2cumccq9WR9yjzgvZmc",
  "key23": "f5MbJg4cgfasoZDcetmjfE56vYfRE8Nbb5KN2YHcfRNc3ue7WSuBAeuyfGnbW8yf63kSWZw7BwDiYiQRsfCvNaT",
  "key24": "5uzTKPe3bPgW7sPhCRXJ4QPEmH8T9YM5t3Hxiad3Z2Pc7uXo1S1W8jKJoRMNK12BQvCk7E7iJfG3gB5QUkBw3AaB",
  "key25": "2jgtosj3bTJUexgfBhuy4x4zcDxbDdVeh1RxeoQtgJSUyDKvvoagc7x3qCLrc2b3UwKnjUnDT1FnAgTGp7nNv2Fe",
  "key26": "41ujByBot6tRnZuEjdrAoRKW7D3KkZtWVSgoV436iuBdwbGuMa4WnFke1mw1C5c1KqqpsuF5SiB73Ly6H2CCLDAx",
  "key27": "ofjvA3pXBqdPiTbYh2jEQ16zLSR7xvJDeCa83zB8SUQUvbxKiCaLkM7wj8TE3hF6ZFuaktS2z87P1W9c2t9pEWE",
  "key28": "1kVmV6cXAteXmieXysevgbZm3cfusUSBNAFFeaBs8x6ooexYjqfGZZpv2hijvryUhTxVVkrPoXT7UsSK4JmKtkW",
  "key29": "3q1puk2wLJPvSVHMz5k22YLDoZTLPc9brjHnWThjRgPqTtcTJybKCiV5MZDMP7HuHvMxJX2rCuW9o48FvEx5eWzV",
  "key30": "RL8gdHEJjXhWpHtaH3TeoieyVKoPACkZ8uAGxDMGcdfMC4a1ZGM36Lxa9e3VZPsfJMfUKCTVw1UKA7sTSE8S3nM",
  "key31": "4s6kfajuD5C4RTfYoN7AEmC1JQgunPU8Bf1Qx6s4U8kMTYoUix4hcuzDacMCGoNjB9fEajesDKLfsFF3R3GZPXop",
  "key32": "3fx8SEiusVLTniXtDYNT3jCLprMyfbpzW2vVG6BGax77vnUwjKk6yVkC54VjNr6heQ6w3eQNWA3p1FgVoUqB4Jz5",
  "key33": "5BgUDYERMnXmamZTV3oS4RDa7BMytJfgbcnc2EXoyc9R3H6NE725RMxL2zyAjAMdnpTRGiv8FW1EwGMYkPMEp3SN",
  "key34": "2nHiVUFY7hAZN1XbF36MxtWNNY2JjtdWG8bvZFY8QVCFxJ5AiENH5D4E8XeUZFPcE9zB2rQm9WifMnyBieMLfwmq",
  "key35": "2stD3pSYZvcSEQYnxKEarrzomHBg2VoZDXJXvG7b4b58bUQwBoUbBwrB6zBGDKS1Ca7XJ8GjpK26vkPtbze3hwrp",
  "key36": "5gQzGjPN6MzWW8Xf4oZ5SbyFg655tK97YGH9uY93JxjGUT5JYeR9ekZgTg6x2AngPEHsriFKFcUW8dJHjP9WHMDu",
  "key37": "2fan2A9qaf7f8JkZGHfRLFkiUKfyhb9UZ81s7Ho51uNC8VgnoMwdefvxsVozMrNneRZ7RCKHqFXAh4Jr2cg9EbzC",
  "key38": "2bakezhk88KbjomHCUW6sKYAYGAeEuBqgFTuAYB5NwXuZ6dURKubPNMdwxDYaJGff7P5ff17AKTV7rBZnxqHaVCg",
  "key39": "3c49tGxq8m6Dw3XcsxALA1j8YxQMbDokbuvTMzH2LbDxVyUq6ngrFk1qaG3C1urVpws18QSCffbNnmaifq2FqRfQ"
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
