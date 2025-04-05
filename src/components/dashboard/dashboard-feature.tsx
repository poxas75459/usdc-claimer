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
    "5o3mmFETGeURyBE7kpA29hTAAxPdXP5Es6a4yA1bqHZd7BYfwX5VNPB8BEXUH4G9kiBWkyFjM8GcJDGLjhXkSAGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ziMEubWfjPb3NPHKJ5KHxDHUB4eniiCnDtkmKiNtLnuTtxKCp1hU2bV58d9odjijDMeLHRwe7aF7cTzA1EuzcNx",
  "key1": "2xSmeVeTLsqJo7iCKsaVUvsZMCPS2RA8oSMcsGqWgXKeUXNx7emMBYEzorord3iiqhBgSDJq2LXCXRna7CGwZpa3",
  "key2": "2U41SsiB1TqSyFTRc1DwKCP2kPvdMt7tNZQbgf4e8ZxxZAViBNiF9Naa8tUtqYexjbX4hE3i1nDimXbvvPT6jFR8",
  "key3": "tWuZApRxwnKiBzzQdB6FAtySbk2zWLv5nZhXP2THgGahVS4ej2hfiM9AH9mB3SJSpKDK2L19u4RLb8rjde4xxCJ",
  "key4": "4wXPA4h7BABy1dtEpnLXG7iNcnaQtN4xMA84D5UK5ZNQN7UY5Qs7GPYfEKmxCGDjgTzLx4nT2omWBcGxqLTQj6Cq",
  "key5": "5areoTv4ibVXLvix6Fgi44QMgFcfoYe9AvFgm1McwGPYjKwe2BEtDCEi88TSRvp8Bg7zHk4w589PYcTf4nBGTtV",
  "key6": "A1w7fXZw4PofNTeCm3LnBGHAA4VC814BXoXthJ8ym8qGitXzhBzpD4rS7f1zvPAvE5ZsgW5uqkCXRTTCLEzdALC",
  "key7": "wLyRQayXhVrhfpbBEetamwF9B5VE9caxG3FBMNdz2NCGNPP947Nf2w6WjZEM7heJvohRBvgM5baCThNPQNCWAoi",
  "key8": "48NdNGZQ33yU3FUs3mxL8uWXYM6L17bFacVNfjvcUSAGGZKSuUutLmjLimQuFDySBHbhKGMnLi4tNomvQ7bBRGtd",
  "key9": "5TY7LUYuakGx4jd25HgLVy6bhfrgvhVvbo5kZjuTnLz3HM5JveXMRULu9VSqbCehKfLycgVsusPHH7JAKwQvuaQa",
  "key10": "35L7V2ANcKiLekFN5jmsKU95MRz5JQxw8GfPiqu5MxAr7ffVdUtWK6j3T3Uw1UqYEfk6XAQtT1WoFaW8iq3jzQhX",
  "key11": "4mN84aqtJtaDg6pKwDDn2xHtgUEbyfumBundkQyYU6dPbWR21RCsxvaed3syZvqbetkWNM72B53wN9XgsAVP7VVV",
  "key12": "2j3C8YnzwkXKXUYyWSWbEXmwU8szBkZ4Tccsr8FroQHA1gpR9N6dxvmorAFf6qKyUU8MVQgqPrNBApVKiLjrQA6e",
  "key13": "5FT3uhjHFmt5ZCbNfjyke64jJmU6XipCByQ74fbD13bGePKecpwLgmLx7NqKcdtGNDYT4TZwagxpZQrXmCw2PLep",
  "key14": "4vuYJxMWudVWJYUbTDCxhy2ewS3XoWGDXkdGM6tCWKuCRCe8MhHNdZJg8UStWbas25DVBA3gpmxjJtB51JSGoaGn",
  "key15": "JGUTKaQsHWfwLtmjiq87hWawe9AkJDEmMZbAGGjVucoLwsFNuDphWhuqbVxbAY2qzsYDZFbM5x7A5ad7JVS8UTY",
  "key16": "4sXiXzV6SePYnXHr5xiTYh7sPrCsYTqTzDxWevPnXtErcWqqNfVCwvR5eYiPLBLnzz61PYmLAKzsPdN1KeAjozkv",
  "key17": "3kx9P9888Gioe5MmAjTQ7Pmr9BcArK12gnFKez7ZQsLuMoEMAtesxRDgi9FEV7ZrfJyjzZ1CsPmNCA6zFfB5omK7",
  "key18": "dBfRquF9yaLVSrd5h7y7wiXPnJ1SeketJ5xRSYNGdeq5xbbhAkQ6DSeAM2VwUMV1p1g8pECQd35vZQKHDGPBWA8",
  "key19": "1v3d5qLMoYTQ9RaFvESUk4D6EejWx73kcXxErZS7HoxMyBq2vRJ9r56pxwJpScTZPoJiugcK7G5sEAqqgxT1bta",
  "key20": "34ixhmvo1PnWi28fRhH1ErKgUm682KRn4tKhEVJsuqpNbyU74amD9odNGvmKkLAnmFnnBE92MdmW3e6bcWbWsbeH",
  "key21": "4xbkekHWsvzv1oY9F8nfwtbg3ZTN2BX7JDPXzrR8LDE5J6hhLPdSHaykPenacGS7ker9buzyq8CE15AzTYUZ2Gy4",
  "key22": "3AS3Az1YP4J34waHYQ38NkjWZA2VHYtNdqJvYwbGh2kVdEBTNmcMCQ262MWt84HjNqd8dhmbFQUsboZ6mtLqQuan",
  "key23": "64sAzVT9rhRkb5J6CLyvEDfvRYkgPBWxJPpRP9hQDvk1RfhDUoN83Rb5V4H9v3sEzhybVHPbFsTy3PAAaMaddLQP",
  "key24": "51goUPqydLWoASJwLEeDob9xfeUWFcMWPqPfhRSv7T4Tbm1vbmD2CRX6wGDUd87X2Xhpzp8E26z2TWnCJYgaRVTB",
  "key25": "3zWPL79EADsmxCQK1AV9GJdzEoBF2ew5fuD7iidRvEG63xeEiLUi7MswakqCKAQ1M13MAbge9PfpAUVfkYANZDnK",
  "key26": "2QAvsr5n9DjvNLvR2mZBw7ENWm27fcVfGUJYC2pgbXety6GvH1Xq6YWBBr2QGFYMFa6KeT2jvKcosk2DVFpnSPKf",
  "key27": "3rUSJZo4ZTfS9i1QAa17WszhRkqUT5Gkgf1cZ8znWYNKGtc6YJdLpVAGoFok3SBhe2pmFMeoknkMdRnedeXthncF",
  "key28": "4P1Q7CtM2CayzMXws8yqkvw2LjcdgkrNurxYkPr8gVyTe57Lj3ehVtnQd8KK6A8x38WFJWa12AxXVAootRvASNGD",
  "key29": "3nkxnzfQFwPFSnfU8a4H6RUsYYMBaeSZVXnCAKkMCZ2FN5YxS3y2UgcS64JPX9qSJTPo9Q3LGyqG1t9mjg24MLKL",
  "key30": "5XiBxduXbYE2CdhoWJWwJrCbnCXouJG3Hah84aLh9icDk4Eb8STZZkG4HkgCLBLLuEQiqB4eFXGwijbJ9q6PixUZ",
  "key31": "ZM54iH2twuwDnE95VYNHHGDXurAz7qE9MZURy3ocpU3ani8yY5m2SCDeyNp3sJSdXDQPSScWCPGbYH68pRJwNvE",
  "key32": "4QBbVX1gcRNxft9xFgx33z6HQb1XszBrpCqwLZGAPyFYudCUkT22NcwAVJyQRHSwS43uHz5tJRS25adQp7xZXRp3",
  "key33": "4reqEpqJrWYwVKJP61tTeype9mgPgDQgCrQPTTB3xxTo3yRW1fvgwfw9YoZW6HZmua2wTPLbzJBrrHH3Dfp4cFna"
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
