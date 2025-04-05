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
    "2a1wNnp9n5Uw1WnLxCPmMME2Ygu6JtSJQrwBPMRjWiH2X9csfcb8yuJkieKtQeChiyqNJC7xXr4yiPJrfggYTkoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bgQYG75Jy8qF75zJBZbXG2gWv7ynwVBGkWFQXPYUSCf4vPhjYj6oy45tHhXsbt9aQSigqHPuFP2MK458oDiovkY",
  "key1": "3qCNSF9ThcN3mZVWa7W5VGVjQ4PFXgYaVAJtC9PLRPe7yEUifyDaZSkrCgvKHMrXvGWnywsKtErSYpoBFp9Kem7B",
  "key2": "5CeK5JfQ2sD4pkyeKx8PNBhzdHUkb5vvB9rZbCEF4j5ssbMPoWR4GaNt3rKzSACn23zoDe9QPNB3Z1UEZmveRQvC",
  "key3": "2KSjbR9yamGsauVBv9XNs1wNpV9HoFCGT31jWUYZ7CHQN9sSBGXmH6jDtw4Ta3SGyvJMigL48h9UoyGDbyuHzaLh",
  "key4": "4ff6TuCmh8amNJ8nxAyLg4seEfUDDwmBNHfdHKGvjfFJtrYWVFmkuEhQ6MiARby9dsKStrGyTFjtNqwfs5Aw3Nif",
  "key5": "2kUywNt2Wwd97PnxXKjvLLvra9s7cXyLxXfT4VspmfF7PAHeyNy51s9QEsZfEAYph6oinTQ1WU9yisQPsrLRYSUh",
  "key6": "5mYfWshYd783nC4mh3r1xJknDFVhwFBVQvQNeJTQKQwtS42yzuXpSxX8qr67wFP2nL4k1yufgexcNv4JzLhyPeeP",
  "key7": "4bQpa4PK9B21E2Um9XGw8hYStLSgAUY5QQm3ayvAEbYeR7Rdf222b2fseH5wTybqLmTZAJf6V4V1zFVU4HBJt3Z8",
  "key8": "2HZCRDuhfLqHv8WrxMg58ELFUKa4iAJDsXTugV8Axg7m2CeYoBmDjHjdtQqZ1tPDjzLXrWducszfq6GtQSK1YgMW",
  "key9": "3KzPBsuSosXamRdCXyiN6gyACY25R4AmsUaMzLEQ1LBWuivfbXdo2oG5P7ruBVkut9aBWexU5UYEp6kvL8PuGLvq",
  "key10": "3J3oRPFCJVVLssJan3DMFMSipVhapSUytbcjJYUzUr9oms3HEe8DL77NJ9GjijC1fiKtLaiGS4X2PeYqiJkuWcqh",
  "key11": "47SqNLQszaWsLVjVy14YqeBussuZqZ1bDXzYZJMgWZCs7aAGLRpLUTjfQxgdRb3hF3qxxLqh6uG3nhYVDLu2NL8P",
  "key12": "2j3tykJHbZyW6VJaN8FEoUzh2tPxEzTTBH9XzaKSysBjFecqRGds2ZMwXhEMpptZWS4DugGExT3imCMRtDocjPLh",
  "key13": "2aToAQyGt2D5wHJpXyzHiK5gg7dXvcHaVrCBY6f8j75mhxEUzeCtHyiq9uqpozvUfNc7At6nj3CnY2rCqnd8mdHR",
  "key14": "61rTBzsqWqVVJu9XiZbhJrHLi3cCcrhmBGxWsqa9rP3hzTnN8Np32BzzxthWEEi3SVdtpu3fr7qcBns8jU6D3vL7",
  "key15": "3Sq8RXLMBZwEuz5rETaSMVEzaUKowwAv8r4kZtzDApkGEVJ1uJyVMRmyhJWCwg9equdjCYRm3wrmrrdLSytaJedu",
  "key16": "24eZmeNAjgjcuD8aBtbBAGyHjKFbKe6XhCQjD5L7b8su1j7sBBwCVgPXP1TP1ACXhZGCxyXtW5VncbDVy2koQKEK",
  "key17": "4fZQpJWtp9TLfXCtyRobvoch8obspiWxhKXpJ7u6GF6pv2GhXhApKjoAkmxxw1pPoa9GyXksBEAJXYFhTa3yadsG",
  "key18": "4EWpSy8btjBhJKzZWZY8ywF5u3opRQvUThxFmDaRTcdjPqVFisQ6pPhztHQCkkgii1AiUA1pWfwTMZWokDUc3jHQ",
  "key19": "4eAtBzQxzWP2VAQeC4qnuVH1qaA1EnSjWUfcNtuAWGdG6osbn4w47oBA6Ry5w2BfSUNdxipmdzAXGa8EzUTeFoEi",
  "key20": "59Ja432XkcdgdLGmDFvaZaKKSd18xRuYTbyaTfFg8M5Qtzgj1xteMzhibAYPjP3Y8aofHDSTK1tXcB2tofM1EGvk",
  "key21": "LJUyxHCFnt1qWVVAZD9cGfMiugkToXRCotiHX6pG3FhFQx1jznhhe1BKHtj6ciMHC5Yxq8jmnCFon5bLrsGSoxQ",
  "key22": "5PhR2zh1EouH2QegCzMNcZkgfWUnRpw74pKQhK2wEN9pXFUcgaBfAhG28UKdXFhnAcoLnkb7pcffoP3V2i87B9mK",
  "key23": "51BUNJw1gRwFJbmzGAEzQ13o8m6TUYFb9w3UMJPWTFpLQbG5kMYBpwcpPDytaMoag5E8EFTdtAM1ebG5Nz8a1hy7",
  "key24": "2JTSon7GRe6owEG6kP8vUpUaheDqPFQrmHs9UJ3SoPJWe9kc8quVgvoKiVXa1C9kugAcPJ9q1GqrnG9KDQTh3WKo",
  "key25": "5AezV4vzcb1oTgKLzUGpjUckU5wLfMxStY7jd9EEKaALsJiL3dLZZdCqboCdPTN7XKmo5HXREebGymtceCHTtpMW",
  "key26": "4N26MuWBMZqkYTPEjn2XdoWnBYQVNHaysmcmak8HL4EVNLqnNiBJiKSkYprsFaot6Ctc8iVqSzcfsQWEvGKPtMLW",
  "key27": "j5WCYS2cHD5C2KszTyrXzfTL3r1sqZHxFS3qT2DygWeiu36v7hyjpB6FvkvsctXN94vRqMegAGpfxoFHSLNbtTP",
  "key28": "PKBHkoguRQsGEXKR8gtzqFFVP1QhBMuE3LCqLXdDHcfDbtSUAW1eLedyJU2TSRQoHgVN4fpQegfcPwMEq1autYb",
  "key29": "4qCLVDCDHcTPZuss2qcSSnp6J4cys4q4HF7DSBubdbYGf1rLnaFxMAibcZjtYsdRW4ZKT8TkGXY96VMxLrWfV2XL",
  "key30": "4JiccuowuLQeAmYn6KwLiR21vGi1nwfPgyoShZhaBNdW4CHQfPykbM6AKcKwMrzQ76R2kzkeS2iXhnDDvcXQLUHB",
  "key31": "4b5bphjwTDGiz6Wam6uowg38YprYGpF9yzZLoQQaRhSPo1zU9TTeCVLqBQxkXWqh1mhs9YWfMhE7kVp41ZdfMuf",
  "key32": "4zMUMJnx4negb9A19YhgSX7XPNNhq3MMDbiayvnoRWCyWoDa9VWpDtD54hdMGPLE1HxVeLiCPHNBKBuXc9JPBsKo",
  "key33": "aztsEcznQ14W6PRhUY3ZBAPJ4opVTK9ivZ64U6bqHDDFpr9Piks3UELjpNLUHpEugNDg9vQWgw88nbzzhkf7fam",
  "key34": "4MQdzez1jJMsWXT92jYC4AmeYwp1VnYRYUP3rJZTjAkJ5CCVRtMgiF6YhoUDgwQ2XY4iiDpcBQ7kekTvUzaQ6TLy",
  "key35": "2gvM4kBK5iMgjAJz2yf1Jcy3La14w171Jzpu85CAoKSPuRDZCau9ngR62pdChKZWDsbuQ3mk76GsajBn1EVS7iA5",
  "key36": "2qGfY6QDPxHTyAGj8sGTqyWiG4PgWrBBezhvsSJL3cRxfgTjkeCyT9mqGLDAXHGxdPCkhWVKJ5PzeYMmUXGrZUdY",
  "key37": "5pZvpb655Cnc2QDdYCd8foYGtvQzH1XQ7a6iqwunFwW1naNLMM9q155guiAddT9UsVeett3pcXQgGKCneYAb8Mq7",
  "key38": "2S8FVTY9h44qVdRKRqVPi7ZZgGt8gc2KSRdDT8oXQGEjtxLDm83u6LsgBpXRvcWFp9RSfVX7bcZDuDQ2i8chZ7Tq",
  "key39": "2zqf1HoQFoTdYaJn26Ps1c1rjh2rmhhEML5QZgPm3hcv9pUMnJo7ycr85FisdutA9nyL6T7uZEFYfR5Uy278fS8B",
  "key40": "5RRu3nVYjiGiRGLVEwquqv16rUWK7wCGoPsCJqhNHcPjJPwGQZVgjkSzuqRgezeAesyk22fUP4mo7vkoYjp7oPSe",
  "key41": "3g6uBMxt1u5jq4fkasqyWUYtbFwUBtGg6Tx89n4hbwpDX7bgsbR2kHA7yjNhrc5NLJb6TZdimhg85Q89FNGCC5d6",
  "key42": "4MfK9vUrs1KFGdFntZdNY2cQP6B5m4gcqovHexEckdoTrNohaWos79SsmJkzy2Lq2Sdf7j1DLCYgds1L72VePZZY"
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
