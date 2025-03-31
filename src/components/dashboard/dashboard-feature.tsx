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
    "25Pq8Wfn2dD5Qo2Mkp8SzvdxPuDAGPY3sz9c75ZJBx5TX4qk1f7t8HHwzaTLZnkQfE6dodpR13Ype8mNgXmWdrRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DAoaFYwjc1RJE4gGrzSnaTwuEympDxNZD9ubraZWerXYqmC6mHBkmKHDq4M86bCPNXTAunWrHe7PZHL6pehzznJ",
  "key1": "3H2RRXBs7MoSggsyZgq6iECdZ3c72upBEip49nNPyYyr4mfb1Vc6w7SfhoEtJzfrCBurYsvj457oNqNQELWae2KP",
  "key2": "3JhLZtmdEUQV1kTK76cvNkVq95Pki6X1kiFm1tocT3NhnsL2VqZniPW3pAjrYgyXq77zNhLgypZgKg4SN2hMN2P4",
  "key3": "RP87UYXyPHUtp97Nd9hyvpGd8rqW16JrPtt5HimZMaQhYUyzafwnYmrMadZRwTEri8x2V4bWueGF66csijpagbk",
  "key4": "276EMUqGBqVoT9SXLQoXfhxsD8UZLMsLtsbyDXAikJPm6t68X29BaKAkQFxBzwZQUsRauZsXv8jxfb2HmcWiQf5a",
  "key5": "5PVYFuerJTZ342yJ6AMR1ipVyLNPAGE35KTtYBHVPuDxQmw9T6hGxKnurdZ2StC6dBDboypsSNWfzLuTiq2keETK",
  "key6": "5Dtfxe1JUDUxZktdeaRqGi8WyAgqreNEMBn19Z9JUhPvsdqxfmPEqJ4wEJa55toKgQitkbkumvkV3M934GXaYjhc",
  "key7": "62T7rLtJykxRKJ9d1Qhw9TdceSGFmaB9Hh4HdnmusguWQtdLdt6ZM6HPCKYRbL5EczheDbzTWV7o4dPc66cmAXSv",
  "key8": "4J3QP1GZk9DWmYxxR3zRoocivMjswLkmTvegWJwDFonCuzPPktGJSDy1VcJTUNEptXqs8E6DaABaazQHVdikiLjZ",
  "key9": "bAj4DxSTytWUKUsT4BUYk2h6tBKj6qzu8wt27oPAzzcuMxJRGeEqouKSCqUgpSCc54tXqr899945J3jGZUoD9ZY",
  "key10": "43h2HqH1J94bAyAiFFe8eMWr6nAesqPwdtWEKRZhNWCXQzeK2fUsyhgDdDojuRm4Lq9Xt36qABA9JvAtUDiyR6Jr",
  "key11": "qy3WmagfFjVKvUmEaQAyXgu8X6PdYd2C9QZcXnirMRpLXmeEYxGS5iUrGjdqPnxAbw1ZUJWWwqkUDffCMVkcYNB",
  "key12": "5cBT1MJGU4Ai47EZLApV2tsHWd49uAKk1Up9FBqZBJ7Xv412ck2mHu295iRV2E5C888CzBpwAVgTys1PhAAnJzdj",
  "key13": "4Ny5pKLMqNHr3EcyXFD1BsnkXbAumEvsN3kb4UAshXkFpJDih59rrzYgAndcdjhQ2XEbVwToGARaJvsfUgmLjGUp",
  "key14": "8ygRvEtMLPBMSxs3qNc3zGXPbKeDAcBuSPgf38iZDWSDzup1Axkzcp46rgZwiyzw9wreGv9L8QBW8NNRrWCNUiV",
  "key15": "484S45EVTAzNpMLMD4uSrxRfetaTcwMXzi5aASssbLWiBBAqZDz5aMjzn6FeR8Eq8ANqJVZ3Cf2KM2ACEHrkd757",
  "key16": "24dEWZ6NgYYLTXPPfwYvRn5PVu8XW8TtK5q7Bv93Ea7QoiH2wrh6YRNF1okGCHX6gbSaBeqjCEVbvXKziYMZeRUv",
  "key17": "2LNYjPC3gh853GarCB9WPppePGTwr6ASkgofZhX5njbWAgReq7AF1oSnSGo2mHD7QUg5FsS8uuBpUjqVxNnVvQ8A",
  "key18": "b55BfGVTX1mCmQbMfGSrzbDfYtUZPgqzfBd3SJFV8VrWFXCobVC3MzVA7YuBrueUoy9KDvU5aE1mX5BP2MvRWVS",
  "key19": "5r5sPVjJYZ2vW6GeckrHKb5AJxo85QW1Pij5J1NEqkhtwkyHqAAaJ7wF77X2B598XSNeWt7weEiFcia1v5HmRUJs",
  "key20": "uy8nJZcxqYhy9JQcRa5HkBE6F1vAMcoWgAdEdLHCwtoQ6DCEMcp2ns8kibCT1VmfPEHvY9McDpynZXi7RcKZDyV",
  "key21": "2tKWU9kUPQHHJyUQyR2etZQfctTxmsvvXxnZ189dj9wzfdUrtijQVKbsn8rwaTVuVp7n7gu6H2djAKEeo6cJpVTT",
  "key22": "5QZC7daFwAxsVsZxYqM1rrE5jKmSdq9E4ie75PraLjTWw3rxT9ryjWa2nDpJ7e3PYAYL4oF36Ttj1KW2t2NSVaxE",
  "key23": "oKmtm11dL7zw6MMBHybS7hZXWn1FF2FinKPYsmQKWESYWKRXoWsuxH7hK8RDsXBfHvdeBCM7zzyLSvUGgDdGRkb",
  "key24": "5gPPBxvhRuQ7BXArxH4Jgim6ZiGQTnkHCHy571raxcKpzY94LzLbaFSoggHCBQkZFw8kz4E7VnQaG8We2cXxnygb",
  "key25": "cDP3gWsyqQRLNgmjWaAYdruED4Ej2tQZqPT6GSL32Bpd7z7BW2ePF2hXohodV2AU51nznYEw5yVfYtdAtrTRqww",
  "key26": "2SU4w5h466s5Gcj8pnvMcuvVH53TeGsATv5BtwPMARZqLRECXNaXRtyVV4kRsjq5KsH9vbm2idHvgkvMa1GD3158",
  "key27": "5fs4oAffHi7M33fbqBfpxUKZTqz9rRUnHr5GGJhTF6tJNcRF2gyysHACTaq3Ay8FraGkBoDLZ93vcdhabZMh6hkW",
  "key28": "nDYJ11TJfzshLoA3RVYi5cKN4gKXZvgtwrdYZxMRsAQLBhNfnsUCmjFpr9t2jnRyzHiKDSW26X1rhNPp91kMsa7",
  "key29": "2bYPjec3ap9zdZy3Ge2dd1czU45wjAz6CThG7RJHg1DHP1vqk126BSCtwuXW4W2a4hkwEYeipwNpC8HxtrFtaowj",
  "key30": "35Cbmf3f6ZpydgDivG7PuzW9zW3g6kKcmGPgNTAPz3Hs7WXJCaH6VBKfpVY3S4bDp7XZDmRS7oTY1KFXHBnoEWJG",
  "key31": "4vi1QgaE5neSwYYu4mWrBkgXP3DyF62YSriXvoVZd4dWX53tGUg7WPVVmMsCcdr66d6iqqYdgHfRuRjTXSxDkm5g",
  "key32": "2gYNHyQPwR5jrfURMdcZs7swE5dDWogfQiU3ooFtbHjDaN9SymdzXDNDBYTRim5mV4SNdNAnnXHyYY15J1zAQfcs",
  "key33": "3FYrsxDoLEHY9aVXGUFxNREYPeCqujdSXbjmpDTvFjaVVr3TzyToZ1b84Us5LjCJQDjGzYBhyYdFMqYSfZnPmCZu"
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
