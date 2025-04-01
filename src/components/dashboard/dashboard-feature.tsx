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
    "5Mz9XyTXC4cMYntPvYNSNdb9GxuQTJkP7AdGMH5Bcuti5FemgsazK9wBuECNkHaDBqbp1mTZ1anrdcMShx2S8kTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pyrqVDGkhrbHrEKPTBTeQkUYuXdfPDNcTJw5xf1BHLaCGEECH7NXTh2rRL8EQAntu3yFFm3zd7hDNt2ohfgrCMT",
  "key1": "5y9XtNh5Jbyr3pz6L99PJER5V9TMLCFVK7DuhWQkEbGA2AD4L7GzQcxdRF1VYDpYnbSXSegevvuLLTBe1ng1z3BY",
  "key2": "2gPf6eGe6Y29gzAX6Q1hbFf51MJv2jfj8QpEysrg9fnLhkNRqgdj2sKgXaUjyTzsL4uqg7R22aZPok82U3iiz1vd",
  "key3": "xrUWnngY9N7k4P11km7DGUqbRQyCzG8oFGtLpbnd3cjKPwUu5FSHssfYZjiX6xfVy6C4jqDho3g3eSR6fYbw6ei",
  "key4": "5aFdmLuDKxREPyovW6hswG4vn4n2G5jet8r8AqJjw9WHrDzJF3bUtYgyTCr1F8FaftLVyyQXPQMaQ9LLHuNKU96Y",
  "key5": "54HTesX8WgkFkFonPfrZ2SMQWZhZxyB9X6yP939mYsfcjcK3jWDuFv7ryuCGnuKzBbnV4MYU7i5ueGmmcrr8MLDN",
  "key6": "5vJGTtEVSNYDkKoiWbEc1dYhMkxAnzdWZXqrUSJnx9BGVU4mkHCnhcsneatyTAFUiSL4cDoUQxxTqR58EwkKvXZd",
  "key7": "4J4uVMaVqcmjY3fDgszEFfkJY8A4xhTRwrGJ8beFSyCXHt8tJU5QBUUDiNGruseQKK2pUJDYDGPMAxMoyFV2h3QD",
  "key8": "hbFALMfEy5QnF9HcQHA9dYETraZnjSzA8qg5JtwY3W9MaLTbFgkE43UDEsFhPg6hCFxDTHb3HHUN6v9YHG1ofwq",
  "key9": "5VVpuTKq8VeGYRYHAutUxANSmm7jy4nrwv9DMDqQBFPwdiW19feRu46iYaW3Mi3uSmrGxteQL9B3LPCRUeDwfJnJ",
  "key10": "31TGG9WUdRjfwh1zp9tgpYKssfpn2qp3uaiUNkLJQYW4xSsC2ihmcGdqsUaMpFbY4T7WJTpGktoqksNTNoUxfWEf",
  "key11": "61GY8sKoPrWMgqW7MxE9qTkobERXeybHG2wAt7KeQebUFibgyE6Ng5TDzsC4Y2pdtdnDCPATJg3ViN2Aj1m5wYGb",
  "key12": "5px7Rww9ZrtUtt1Kp3ctzSdpuELefU6LfGRiSndAFbxPK6V5TiEkvBh38g7wdievZNQFdieauNncZKaSwJdixCz7",
  "key13": "5iYVuy4cAt6jEPfGrL9fuNeDXqCzyWDeN95funU3WzvXHvZFQngc7awQVJjppu3UWCbRf3KQs3HexMKvv1f1kGJe",
  "key14": "3MWUm6oFmDsAMQvMTr6uMCRqSGpQArpXih2vmABkW2nVonndtFVT3uzAiCZ7Hxqmf3X87JaTCkeXwtFxGttqqop8",
  "key15": "2RuGkxFC8AbyCvMEMf2TKdjZHKVNPUtFVtwrJ1P18uYzUckzCHhhk115DL546hkzchmqaytXeWbhWKTJKAQf4C7E",
  "key16": "4BvLWGEkRZ3Re9f2LyqMYzstjq5tByT1TFNgBceU5g9r37vuC5vYEfSWhi4Nei6TVPrHo1kXeRUvqiX6sNk9GARh",
  "key17": "3ozscDXHViz1NYt9SSPDrc1XFYbwq8ZZYJ3H3cSBH9CYYD3t71QegnStRjRsaNWFNkWM321vFN3FTJ9MDjcsRajE",
  "key18": "3Whf5uUR9cNpVtgR6AcbTJq31MMBLh4VMNH2m8YvW2ogsBUfE5Zky1L2SDXv2SH5TkSovo1aKnUsQB9jFpEf4qWq",
  "key19": "4G2ra3aPcNChUo7LQowepZk9pZJs3URdNFedQF6pLxJtzrHgsrVvdpBzHSUHbyZcnhe48m4cu8yTZzZWUaRMAStK",
  "key20": "X3XPEX37ixvv4uHse1wTpqghhtSK582UrbzEtQKST1AEwtBe39ZQLViVPnYxLteAmqjTWrYrNH4trBfX2QtLXB7",
  "key21": "k3hZfXC9pxZgQUgfo8WzFxt6rBo5gxBiAkCX3ENt8gsan1iCj4ee1cpd7T9mAHUPxTLT5ZFSJDRgkkPu4JYaYQE",
  "key22": "2XKeLxswCpP33bnN8yVJZvbAHjaPqpC7v1eVphV61E616GzN2qMGT656z8otRXCs3jGwvSKLqcgxQQGiKDFAHT26",
  "key23": "Kw8Xy7CvBbuiqjbE19SUBKYgeNCr2vDEmaxDQgaM3UV1fCo6ATKu69YXE7FF9KBrNrArpDP6XKxCCbow9r41Svr",
  "key24": "47pvrgTgvn17vY6RWkf84pedcqmqUoMA8bPvYfbpkw8kapZNQqDNHhnxTFkJMq2skwrEGHz3WoNBjqAi7MYHPjsV",
  "key25": "4zQjgnW6R66bQUASkYFfpis6VHxeoWuueAC8EgRvGmzozg3wUpmqifnuFLyr91k6ahNBWhzzuxTVD485WBEwWQcN",
  "key26": "3jfJij92duPDxRAiponstXFnCZPe4RGRJAxtyCJFJZN7bXPof5RtbawUBLdGzWZqe1pjcfAb5JoxPowFfFe9Mir5",
  "key27": "41YQXEAV1pQyMLrveRei955Lke1k6j8MQyfp3WGyAKkQhrT38BCHxZGDBasY8fceqtjVNQskrVfR7JxSapsHJXDr",
  "key28": "4X2evMG3rUFmcg7AKWCJZDKyQ8QchuqNQ2dUW3z5dqQhaAvrpDPj7VuV6QA5Nz2meVhn6tAQq2HVwykVeEURXdij",
  "key29": "5sEaJv5fxAzTp4oPZtx6rPUHRQQn77CLMFrcSba7vrNxNKehGKSQs1LzNxtvKi8kdJT5MDVCzTnqpMJUYhseBsVX",
  "key30": "4tx3Y8r1Sgf2Zh6cG9HAC8DiqAi2d6ok4Zmr2CKBobHY21d6xiacaZ5L33vgKf5vFWYkhhVGcUGte7qsBZHguNY5",
  "key31": "3XANHmVVwNsLWazuerWXfHx6QER268ZpKrbVwZxbLiLiGMWaik4FwGSDViExhTekNrA8sMCYKhCfEVRS2tniRb7Q",
  "key32": "AyXvDcbks7mts5QvDoeoi4h7c6LhpcZJQcr7mYNdqhpW2wtYbGXRBsUFbCUuZ2BL8bNHcDJmiEezn2SfsHYpP36",
  "key33": "4447LafLjSdUT5a3PHtx5mzMjHgs49Ub1j7LjmXp7nKADayVUGQbUDajZBmbvarwDpiMgpnAjJKLjLoUTKU2eE2",
  "key34": "66p6Pp6RRZ82ENAawwxGmrcVaXHhBXyG7axyGiFvpHB3yhHNuqtAMSc8y9zaqRbUoMPpzvEVGYTfcftSx2mSZDfV",
  "key35": "5P9XUGvawNBzwEr2YYAiooif6QmC6GqKwok5WdGsFfYeHCmPwiMZrxb1RkxrsMa9xuup9wRk1oEfBR5yXGRMNXFw",
  "key36": "2sQBsHYfVr3UZ1Ngmj6nUEVkZG6GwZMSXJu37qLtMoZ4RWEasxiA4oXqbS9ZHtRZy4VSXZufCoyLJkAdwuN5HcGX",
  "key37": "3vX1zvtd3S66nfJqLChrrTHWnwv8P9p4eULyaECZmH7S331ikv1tY3imk7xJaLCqHamyKyhE83pAXAFyDRnXhori",
  "key38": "4FQo3L5hdi5p6w6vcoHGV1t4Eo25fQDxHsfDv6UyKnMmiqmuo6ykVf2sTENxapL3v3DuTshTL6E2eSCEDb2TkVDb",
  "key39": "3DttLC8naJrM2gKZGFb1Bke1srPBN9P1o75F9pdura6oFP6rDBvbLwatqC2R5rMGKk2W8DDG59Uk33hi1dDtcju5",
  "key40": "2CuWRgrKnAEHhrBpuPS3SGLZCSeT7PEySKjYe7aVCDV86nKZUYSUPUxsJSdssGRA9W1AX1Qq9kEGtFeNGPx8946s",
  "key41": "5oN5dLhefGdifMB83zVz37sDUSDgyra6HHQNPxvvPzfAVzmbZWoanF4UPUBVTCYqHMk9nddKeC8PiH76WWjBEJcD",
  "key42": "3mJT6EDFN5wtKZy9oRxeUCJqwKDzjNzk668ZfCwL1T4FgpQK5tAQY3Q8ix9YqW2F5ZuxU9LE8DbkgMmhe6MtxKsF",
  "key43": "uPQiV57V1iG6hPSmTLF4RcUd1MtR7xgQo418Heg1V6jDZyxJyaAMgTxK1FUdiLfpq6Tt82BJfFZaeNKcoAWyxZX"
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
