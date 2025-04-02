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
    "4GrjCPTXfddyjjbv2DcE2rC3VgwX5uQcFMctWbHJnCArrX8mLH3yRJmkA8T1bfgBrytwKvPksioFiEigLo4iURpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGGKqWjiBbZaeHzeL4tZBfYi2PaWWjaCLkp7Xzqeaz38dT64NgqTaNBLJ321gyuatzRYXk9GRA74ntytw9ejuUS",
  "key1": "2x6HD9FUSWcXN9Hkfs47R2esNukjeFkNeQ5n9aeYRjcivYLECpnDDoWxwU6hAUgyGMRrbaUWJFUXP6W4wLhCAqdm",
  "key2": "2X5bzcJ9bW3FDMMPvaA9naAvnAiyB6NtwoaMq3zsNoJ73iHKfanux8JEY2Lkh788sFh9zW3csEENM1g6xAgZy2Th",
  "key3": "3ZAH9mfDoHtA9Ri3geCCW6ee8unjkwb563TSR168eHpd641yVBZaufvXdy8fcNTToiogJPnvFr8ApT6XQbAsiupA",
  "key4": "3pescA9hEHNvfnCQcp6Vw3Ff13DwRzChca7rnWebxvAuswwyMZCERWCiL34Ww7W1tYnTF9Unw9yov2Xg2xv72zF1",
  "key5": "2Z7Q1z168LQ6zjdstPUzsDdP4dMDx67RoNa7ihZ5qCCj3xvrZmZ99ZLbDBgEUiy47b9LYXjk4Zz5qR9vs8QeTT72",
  "key6": "ziPDQm4advMBQEWwSD9NRzR4BiyuAh8gc5UZ7K8cKmnXPAwCPkzqe68CErFufCEjR8iGXBwhBDRQAACUGQY56QX",
  "key7": "56hrNyQU6wR9n6bGucgR3S3mJ48sKhXpKLq5ZeBgNV7R8Tr59ffan4RvDVNDNUb56qmYiBWRk5CcMQ8czSv25LQF",
  "key8": "2sqrXCeHXZypVTYZwhkNpLnu4E78PnxeUmwhgfdUYWddnqr8EP7umYwmuwERPRRGsysjSv666hiF3WHnQpxf1XvX",
  "key9": "5XBtQGoU6U5FNvEjbmn67Ebzt2JVPdgP9diH3MTmnCmxYfJw8wBPXgDxmtA9QJw2qSsW4eF9b5qoL4WphqeAFTK8",
  "key10": "2FYZCSoJuRKCjyCesz65g5TtcfQCh9ZNeAed2A896U59kCLKv3SKb2HCzUe9YnWVuQVP4NFBmY5kiKWkEotLrJjk",
  "key11": "4hiUPT6GeU6R3mg1EXj6rpCh8XCmLpHD9TBfgZTPJyECTMjrbTdPX1a1N4eoB2EevFbgJ43iLgqFfNpPTWLjjYFm",
  "key12": "mBwqjcfaPhDhBwfRb5pAafGGQYpJqetGLRp5Q9WRrZ9UcSokxQqNzx4EViLnjGfYgGh6i4AQMkekedJR8jahme5",
  "key13": "8hMmmhbW2CUGobVXAGDwfxmKEq278zzGReLRpmG2RoGgSxREw2uSr58EoZB64KVn3teA3su3qCdkzW1MCFveFSF",
  "key14": "45jq8gKGkdko5Ebnmb5jwSZR14Fo11KrvzVMbEJhLbzMmuxvEagMNN4fswf4rhNXtmvkXmAD6iFSWQS1yxUCNbsU",
  "key15": "3XdzFmjyzVxbkhLqdaCaV6CfgjVEVA5Z8YnAdpfyTcbEcww9DGtBZ1droPHUMjuEiggeeU5Z1EzpADKrZawExx7V",
  "key16": "5SsuhftSy37BY3bMJ5Sd8N6CBrbsKLcWu2MUyKETVTzJRFtoqk8qmDDjzVTTfSoFXgeYrEU2Ae7YQ9dD8wP31QSh",
  "key17": "4tSSyWpVLh9jhriJBijhFYc6Afvxc58nXHY898oaiTqVbNL987Mq1hAN14W3FPK9fGLNbBZqtZsUegJ9stx8rUU8",
  "key18": "3UE2AQDBA5vA9WsxLBiv2RRzmNg6292J6SWBdBwzNGoquAK3mLsGAGumRNCyjb3irnzUdNNUWBX1UoXdqbhvM4Mb",
  "key19": "2PqRqXdsSqRt6WSFR3i6RurB2KNNCwcptGY4XQTEfHhfR81KyDWM885Qhr67zpKzchLuTefyPCB1d2crdMBe6RS4",
  "key20": "4djbC3QqnwnXYjMtUSvwYJxovjgkduCikb5abYzxZiuwhFeH16QBefVbFrt5CBwNxQBPwrZvxwsGMH6ae2nh1cnP",
  "key21": "3vHTXK1Kr22Cx8NqBHWh6XZ89iWTdnnDPK9ikoy9thK6erVtbFW5e8U2gfJR7VC95wKShNd9xAGK9DJnt8BQ2z32",
  "key22": "4z1ac1KLcD52eUXsoXWhbURS6j3c4AgNWp61WS2PK2CLBc8aQ2ff9LXqNobxxJvdVYkFAGWkEnHZr29B93eSCrEh",
  "key23": "uVLWVt5Mh54rT7ijCfouYgyBD2UTcTzyrY68cKpVH93Y7rMdVKfTZnc7W2KqEUqsioxLQ5Z7M4TnDpxxSnnKssJ",
  "key24": "5ruPpcu2FtDXykSVjCcA3oanafFKRn8y1Do5pq38Ei2nwAWutiytvELBFQiPehXJe4Fs8Ugs9pM6pbUrwb8XJSbS",
  "key25": "594kjjzpoJ986PJkLh1h7ecaowgfciCHGXYA4kZASq8Ny5xzv4YKGzcQyFD6eYU1rzPQyRxMw4cRgzdHhTPJKHyb",
  "key26": "5niDUWT8ftroh5MDB3x9JzicRFg4YdC1tSwZcYxrNqNiFMpJifsyXEryU1WpnFr6uMNJ4QRNQr2whqsVb7PHe1Rs",
  "key27": "4nKTS64igjyEkG5LMLziSa1bUveJUiasK8QX4r7ZZbtsoRRcVgEeJGYNS9BivVtAHcF9fyiy3VTdqxJM5snTFEqp",
  "key28": "ZYvjN2poVnawxGgVwiomSPJJQFJmBsypcKivnRLUchTayVTMHY28LGP45pgHCPK1C126Uh3JYikVKq59njEiFRq",
  "key29": "42caZoMXHo1pG8hNv62N7cRutcJ1Lep8LtLLZ8maJaTavdi27N2WRAi56mCxYteDgYE91fya3DBUyTFLo5ro9yFT",
  "key30": "4KF9QB9HH4gBgDiwsQAdSNfrbS1cPdumMaq2UMrJ8KADN5cVchHgc9SV86eq4fBW7mugB4wnotr3nccGEe24QbnU",
  "key31": "5itD6zEqJBxRZHzmR8jctazJXUnud2DKxpgTjDyRxMvUcobaJDTaq2jG6mNaTFe9WwMDonCXDc4J9kPw4y7h1pfD",
  "key32": "62oiy3Kp7WMC5ddvtJUXoCTyFwDeAnMSwqJh8NERxscCXzgwGrb7C8V81LD5sYWZWx1tprABADYuYC5ycKo5XTMB",
  "key33": "3FYpCKoADaYKogiyv56GAbLdPHE6zgfctBEEqUeekzavVQH8GfUqRvq8SXWUWEt7iNkfBXBe2bM13K1CZ1nZjAXD",
  "key34": "63gmLdZfsFQEQTHvgoJgvTLBbDrEwrddyaZzUopHwLnEN59qFvhwELHWG8gsVPXMFjJxHBCkcsRJiTEVxmNGagWJ",
  "key35": "3mMffozJGVHBaFLDu1yQCKbvCS1b1LtnA1zbg3G4c9UUwJqvGLZQxUm2YJyfhRUMVpXtnuh1N6jLucRhdGBtsrVU",
  "key36": "2NR2idMA5yFtvH2w9pEnfFKMeGze5kFodcFuACN4x5y3JDSQxfRAfXT5yYYGvjmLXdGSvhbxFvxhjGwbf8e1MvEd",
  "key37": "374tyCtkAvtQQuoqHdG3217pyNPZ1fKGViSoBLavnNtbzTYzX4hisyKzpXfUzhtdePjjMp2k5zc1o93bXPLfQftu",
  "key38": "3xmYVPPxyzy4PXrvXz8KLNeto22FRMGPsPEcaTJo2uQwQoTd2PaPLC2U3NV4hvLBferSsbCrHLypNfHtcCmrt3g",
  "key39": "3o8NsgmkE7UMNx8WjAKqbVkpZpy9Hi8GvSru2zQeheL5kdeELQC8dNYYUDmSCxZZZWCgUDtv3ZB5gV83C2bhCe4G",
  "key40": "5qiAJMrwVTYFEeznjYMb6Xj6CXJp1tsWMgdRJfqcvCwtninLcQTL763fhPfDLWsZ7NLTdtEVUeSaHvNgpdGQtzdf",
  "key41": "5FtS5djataVgL6xbcmQuxb5wnnRPAyxApDyWwSLwUqk7m9Z47TjU85DNYCKzkwjdKAHG8HNb1TWnqZk6QbVCKcgd",
  "key42": "3nBY3RWAHcmKisYKdoydKKGUdKz65p9KEa6A3LfHxCVNXCU4SGvJoC1t6FdcuTm5TmtjQw3tC68oC9gJnKWBijnx",
  "key43": "CkzbzN59KxRx9rGjbfJAkbxLH1Jxu9JMAt7EcvmZihZUpn7A2kpTfXZhKw34Am7KSb7DZdN9RHqFbyKUSsQbVic",
  "key44": "3toJTrpZzEBxLRkeDPg8KqsYfYEmSHmpFMRdz8RuypAkFSvNsFZKHCsvw15sJwCntrv7GEY9pNB7AJCKQxZGdUsK",
  "key45": "3mcsdgKMMkeRj2uKsnre2YPLx7QFPKmtK7tB7CLPmgfRdDg6DAjniM4btzbdWM6rCGLe5T99HVahE3m4PWAiWSNb",
  "key46": "2hmLwrP6o2xXKt3aSnprXQXUD1KBJucy4XCjGPMotQocoh97RgxRvTYAQzaDWp3XUKMWJqCm4X3nsm4MzCMUJXVa"
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
