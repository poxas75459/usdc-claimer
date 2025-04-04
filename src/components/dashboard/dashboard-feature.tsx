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
    "25GKSvKPMMb9jhX5qkL7GzY47TPQHA2uLwt211prSnCraDv4Nk7AZynu8jfxU1gtEs55evGVYLBWpZpJqQHdEwRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mvg6Ptr7zoZKxF79AmyrCzyUN6fei8VW6LPeKtuiU2wBrBgEyta7HdT7i1D9uLCmTFSepHZShKMDUf4cYWJtDmy",
  "key1": "4PTEYUbPDeFzUDk3ji1FsnEL1kzrwR4jwA68Ex8UxT6XYbs1kB3yG4kgeneB5bPR7SUa93371ecBt5DhgbDUyEs4",
  "key2": "5u74E6wDTp1hmADGj2q2P4xTY4LLkrpzmKHBvX1uUTrS1qfSB8tyPJCEBaLuXCio3Ts6SBxhJf7E1MffdbEAnU6k",
  "key3": "pfNyf4tHTQgf5QKkJh1PV76A1xPueYJUc5wJtUQGywLWHFkcs3or1E8ixrCuTo8GDoEKzgXtiszEMzYRY6ZRpCP",
  "key4": "4kwRS7A7auSNckp9yvpyS7v69NsWzVLqvM8WWFfU81RsFYvCXqD5giECmqqxMHE1QiB6ESxDnzDC5Cnn2pNrWvE9",
  "key5": "3wv4cALGptRFdmta6eQn6Y9JkWivZR17mgLdMApFBtNmzWUPvk7DH7thHqnM1f9txG7QFNP5KvCjo69jNb4Zoksm",
  "key6": "345yDXZFhSYczsGZZW7kmaNEN4BkogNf1AUgUP3dLVhw8WHERnosNR86YiuVxRQDZebqhJV67AgnHeGzM5f5ymEo",
  "key7": "5CiXvuE4Zv5PbNQJt1fTEvNiZwzUgtDe7sjpjM6E4eqdVzZHQ1PU44jApoTJjVegg8Xmuy3mjHQPHV7KgnAeZVSC",
  "key8": "3FNJGJZQ98xaeRm6EEuTFiGZpAxhoCpLfH3ExH2azeqvLo5U89PhkKVr4pSHkZSxG7TFtQB1zcN2qxGvPDJ9q123",
  "key9": "453NfmUrj19Qg6pfL3k7rsWcBggiqRABSeHXM2YkC7XX7afQAbYba5czJ5McLf1e5iYmFLELTSrJvsCsufgbc9D2",
  "key10": "5Sf1pnfsuayEzhExQwuMhkrUatGh3srevkGDgRjDeZmMLVer8Bp2NRXXRypxoDNFonhgYftdBVuYJA9oRysbL6ov",
  "key11": "2DXLesD2whN9DgWKrXSDmr33Yo5DFECXWVdXptRHZ2GPS3Z8pwe8YDHz2FxKv1J9Lra1q3AnUgN4CeihNQ4gBfxN",
  "key12": "2onrSD83ya4qyjNA5YtxhnXvXoBvtJ4eeCbGF5qe2SoxRwHZNaPGUrK84xt2chzpV21HFGf4GV6KAHZSKBzaxbAg",
  "key13": "5vWjNfBnyzY8EqpFWAyMJzhEvoRP2Ek6ZZm4Roa7RFDurUpEc21ww5h6nPFkBeF5aDN7qkGv14PSRFwZaYitJWTr",
  "key14": "46n1CRAWf2TLa78Yn3KKhU7UYfsxaiYx4eSNwJ9MT17YXgpxNTXbSZAaikyi5Knapc1fxFUz6NP2aYmJQhBDJ3Da",
  "key15": "2oKXj5MHeLKYmXDmmE9m1Nyd9CeNtsat5DU8C5BevMCzCidxBinEgJAg7wLWLTsE9YUAjHCkKD2b5qK66gWb1mEM",
  "key16": "3xoP9iiZnTiMxr8m3kHks5yM79W3KKUJvc9RVrgKoKEVSHuGK8ohJURZEyDrov7AdXQpn7Fa8sQRLjAceSvQFvtZ",
  "key17": "5ijAZGq1WXDjrnQz6mV4TGZGEJXoZK5agupEGDZA5mzFaiMyyCPExPzvakkoyoTym2SnQkWUqvypqqsqsaP9S4S4",
  "key18": "5f3e4BnYAHiK9iRLKLg7hfanqpHBD8yfDMCc67Rfdbaj3MyP3updxsRQHRu9YsD9FbFgvRjJBijToGnG11t4MKHc",
  "key19": "4giQpZcWRQspJG3AcR1NCNV8PqXLWqSKk8MMGxFJadD7xu99avsUXMpuVVgkCEPNXouMA9WfBSFX6JQsnGgdRioF",
  "key20": "3n59CmHUZJvoAd5qizuFPt9ycJ4nvvYDRz9zDdkr3F7Yp7db8E9Z3pefQELVi25Ge79hEdAM9npuhfbrUF3tXSjj",
  "key21": "5WEJZwRRM7Z5B1cKaWiMi7wrY2CC1Ci3LBxpWEUhEJuhY9EDeMbWXsgUWSosrNuCTutLfKDpXmMbyTdtbpLzqPcF",
  "key22": "wHh9bKkEk4SgZYqMjZLj4PsRyikHvbWAn8LV1hPhbiLTZHt3We1yZyhtkTJGCZKUcavo6NvYYDLTSkWL6S28QC3",
  "key23": "5o3GB4brTeF2uaqUpDWGQ4jmmLenQpgmj6QQ6Cqp6FMnwhwLeZRVxMBhnkPPaVKaSayZVi1M6sazn5T5ERGDdPyp",
  "key24": "42d1ig11H1gKJYgHAJQexFYpTNMB4DpgokxszsbQRfGfyv5fmVezgmyYehT6iRvXnqPYrz86fyjaf6ELMexNSYG8",
  "key25": "23uc21UZhQZBireS87ySD9jHfViYyHBPN7Ckhk358wLgLByaPvdTqPnJqGdZ9LsTdgwk1Z5n1z1z7EWy1yHruVFC",
  "key26": "qzbnxniqL4qDGezH9DPbA3cfwRA9QSVzY1oDbMWBLBY12WV7taEnbvqBxzbGPQprsZvHnHCeKNonfKep3TnfMpz",
  "key27": "4dJoMqjSaxdXFqWhoKJPZ4ZCxMvmzfGdcnrZKC6YoRtFD2xbC77cFgMhA1rCpwMXRVVxmQrDwm7BSRY5BDMdrnDm",
  "key28": "3FK5Vc3H6YVM286JvYg59BpWqhwA3kwS9sQGnfqUjryZrfgU8SHZNPpppN8CULvHPSJorNPQjwWNDXRfF9vihA3h",
  "key29": "2kRuoPecGDy3Nz7fbSizC5nvZfb5TFYZxtXQLn1SzyXhnEFQALRdqHBQDixXhk7qqNKGvq9oHXZ2H1foR2PVUxLo",
  "key30": "37XHSbpanweEnEoemeuTGZw634TJGyMtEUPMDmQh1ShBMAEKL49KGqWAVv3hZPv7UZUmzVjD8xKKrrjfm5rNxn8t",
  "key31": "2BmKsZZchDVhWysi2hM7bTX1tQq2sxMER1uMcvixzD9T1pm4AZrmdmCco6EjtMR89PMSQhj9h3k9XKKadj8ocWVv",
  "key32": "4snMUfosvFFWGRowTujSJEoghWJwrFtvJpBi59eprJxoUTzcjkHpzCGXN6Asf3aUrhTLXNTBADe2oD7HvKBwXtof",
  "key33": "5xpyeHMiEWya5puhDM5LvKibZ8RTgtjDVrsi6h1xtSPmvvDXgC67q9f3rvBfJYfgYMwZT4c3iAuSpEACaY1UbM6i",
  "key34": "2cHNvHgfruv4ZfdrQVjdM9vV2cDHyBxeXdceYbhAqpYArhpfvSyEp4TZCVj9a6QRCRFKe5CR1rP3JDxUwv8tyzwf",
  "key35": "5SqzGocZZZ8DJdp8rogADH6ySrwkkiRGBp5wEnZ7qfRgehw6299hKs3c1khGbCgWgkuQJPv5kNu2dRfjUHYDLfgc",
  "key36": "4Rc3xMmmj1tPaSxS9chYoHZzUGEXmyyB22nHxB3btKaxc8RfxNkWA2JoVHwTrTAgeS5SSjN42FsxmUr6jKUekC5Z",
  "key37": "3AUTzzPRB9EjxvjZFspYnjrk3PvGicWhc2axFTjbLSShbdUxfyyfcCUuxAa7Styc2M6EFGPgSBjoLXMYaj9rexAp",
  "key38": "3i5hPeh67AoEEbBkU1f4kGWaxrX85eS498JrxC8P7HS33RLhJAEQ5wuVAU93yJW32kqLeKybm1gx1MJxM74qRBnn",
  "key39": "5ARdU7VwQr7yncwGdmPYEEjmRSuXvVGjXb2KPndxfaDhDaXULeVkCDu5Nb6uNP7sTQzq3kPsMkWsayvvESuMkM1j",
  "key40": "4HxWb7Qx9QmqFWWTah3pKaacTrKbYPYfQ61sdjdx8jMKdt2rxroU9L5LCnk1p2VG16gGeeZB4Y6hTkfExYrLhJpB",
  "key41": "3Gq3cjDpqFcJB8K2gBJF8FeV9eQnLDVhDLuNVuwMthtRcCzMubKyJTsEUAAZgsFYLsiZSHxe8Xz4tGENVm2CjzW7",
  "key42": "26pUrizuFpsuarJerj6w7jcmhRnVx1jFkYLzRw2hF5BXTWgjborqsBPA58qhsmQUiBrGXJXNrPvtzWJUA2Ufsfbk",
  "key43": "2UxXFU1ZtbeQCx8XkaBfHa1XKmPpDTN8qF5XJF7TF3bjoG2oqWYLAA9MM8goTAHtb2NZ785rxKHsBJBqGHQ4ruE1",
  "key44": "3kHHcjSmtA4zUbZQTdqsmpMnQUkFByQsgzFoAwR777x2xJMNLPcEaft3c2Vdjq6zEqcMyW599f7caD1jBmX1sDxe"
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
