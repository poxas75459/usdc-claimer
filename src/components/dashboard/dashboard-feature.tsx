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
    "4igKNjyGxBSjYQ45d2hRirp3xNKY5urdy8otJ25y63FosMciMLvMFTkPrVNN8X6K5J7xA1iEHqNxvxZZ7k3tZPpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kb8uJ64LbVsEWap8GrswY8Y4rJHGcSMHe455z47TjGqnbCxZs4FvBQwgVznuYFzNdT7ckb6hx3d4z2LXWFXojLo",
  "key1": "39cPFgiR5moESrSUkvPfaUa1RFBB9fUm8ciLmXeDuR3p9TzaHp6YCYD3bYjNZWM6XJNzsDSY6vff5qh9pdc489gv",
  "key2": "5Mzt8bWmDUaiiJiXUr6zRxmBQDoRD5rzDog5sUPp6BbGoXq53DTg8iS7g39DmQ8hz6dcgUGCAGYV6mcDTgDdk3uB",
  "key3": "32jqgvDMGpZnpF1y378eAapb5xx3CDsWy6Qm4pR2GVgThkwSJUdhPyECFtVUuy1qAxPRH1VfHkdJQwMm4n29soQH",
  "key4": "4wzXnFQjMgqmPGzv6sVw2gzcbHCjxd7qyTsXK7DMLWHsGsSfT9wVjSrZRRscCoTHJgtPDChLj8eyPUHH29XgcBcy",
  "key5": "2bwikZnaNc1cW6hPFJ6ByV9hnyLgLfhWtpERt7QSUzTFcuFqHPXPz1Yucd7ydAS64eod5zHyX4pYmeHUMixGkbrK",
  "key6": "2MNqFvHsL1JaNnhT6tqh769rtzQWbujfQ6RnqYydHZCsoXeKkfFQvd1EA6ReYCk1ZPt38iDGERzKoUSpsNpxCqJR",
  "key7": "2ELoPbMiwMjb24JqxZabeykzu7J42kuZn7n1VMJ42b1h5UVwmrYdTfBVHYbzjUnL4ZoqnQdXi7W8zcc6H8tXdJ14",
  "key8": "3j5uhRwMtzkttc9KcPRWskB82JqC5xZup8c4wEScS98aVN4yeoYmXH3t4ysFXoSSoKbZKBDKV9coooqJWaYurEwq",
  "key9": "2i3ects9ed9QSFu5jeJj5W7zETWqEAqrW825cPw2h5rFNCcKajDZRGF13dY2QQQqKBuV85VhhcdjM2S1BifLH2BL",
  "key10": "3kY7XUBHGHmscxPmUw5cnQ7WSWbj3Wa9yzaSW3mS1Rw4qTpJX1bsakY4VVYkkmWrv5zC5hwmjCkndQc5kv48Bzp5",
  "key11": "3TARZXz3sM96wcpXrdc9NtqXpMt39b89Sa2jsj753vpQoZmBqR9gCZon4dxFfNqeKNVco3QPnKWfktD3nbFZzWhr",
  "key12": "2V7DVLAF6M5pDuBBf4U5ZvbjuLxNCLogorgANhY6CSEjMJmJMKoz2h1Zm4Vox3w1w58uvJN7pgf3ani9zQMQrzPu",
  "key13": "4u4mqFekn5wiAetM7JtEJkbsDyQAv3fQ29aSBBQkpLZtaDvd32bx5YUTUTzRPKgLP3dNtmTLHV9it2wBgtdNKk1f",
  "key14": "KMdFHpJwFsSE1AN69EDh2gqKmEeUvRRZ8a21CWyBUeNfiWGpwbZApgFd8jwjH6Yj2VVuPvjCFgfaHhNXZNYXXUT",
  "key15": "ut15h4u6FxFQebHWHXWuVWxin64YuvRZdwvbDGV4jLBPmydjJe9NX1ALp7yoEHB7P3Ck4MUHCLWR36Ldd4UBPQJ",
  "key16": "2cMJoPyeKfFDyjvNELNcoXSxDwWT4p3aVu2Dp11cciyyPtou9ih4nWNtthfEGG2eVzh7uLvMmKTeUa2R4ta1ajXz",
  "key17": "q75bxh732DiRFGHHTGF9k6brULpCxY1nJr7CWgeGVoFSFe3sw6uS5zbqE9oTUHH86AxVVzgS7qFho6Scwa9apGQ",
  "key18": "4r1yo5yivcRH7XPdDofrHoEapDnAGYEoLDzD9zwZGnuYCinjfC8P8Vev9JXQiLfu55xSqdL7WAyGkcMQm23FQE3v",
  "key19": "59GpK2miqoaUr4Fezyu5y7NtkKLRpAHtpV6NDFXPQxpVUBtbLsbLHhcpFtx3aFAfBwdzogFr8rB5mF713ciNxhYs",
  "key20": "4TYBupMxaiwUnhNonrJsavt1H9xxQzM4CdtweuZbdk51C1uyjknEbK8WoYaHTsQLZtvhTypaciS5ajikk5cwZcs1",
  "key21": "P4TB7uFfVsfSGeqAaB6QYNN3QzPLj676AGYJwH5Wfr5njjEjAuvCsakHbCx6kgkVF7HDRao3AYyXKKFf5Hi8Ku2",
  "key22": "52ftDyNjmPwYmocgVWsr3Uo35dh6DhnBaAYQzzoW234u6rBuyzY6odrfC8pJT5aJtPNq8EPTP2h9aGtCY4K7hijP",
  "key23": "3e4QnKqEJcKpG5Pryh8o89jr9JTRGxpQcLUA8TLp5FvoELJytSHUWTnfCXawCajn4ucUif77SKTUKhbGTgkf9SV",
  "key24": "4WcPrEicksQRHr7obCUEyypJCCyEysewHrEfsrRrrHDe8xkC1JejHFoK5SqeL5x3vWHQrf7sdE4rMQSPvCW4yrcB",
  "key25": "YKvKwVdy9NN4rieQ5fWZLFEeUseKks9CNyqZLFegJVs3VnkEWd2eVExSkmUycphkhAY3v4KuJxq9J38KNdxTnb3",
  "key26": "4MedK7GnFFJqsujkkJjzbZNQd24ZQang7bA8DrfXyT41TeLyaW24AcLAFM1wpejfZ3RuMxWs72P7LfFRA4sYQfq7",
  "key27": "2MNxeV1rF2Daqj6HpGmggHfJP887McS69zf27HwJmwtnfD5uyFJrGSpdgbB9gPMZbzSFURWJ2QRdzFtZDbaZSMUm",
  "key28": "5kKzZzweFaJfsChWWhDhnTi3cbXGh56RMy3HCwaFXC9FdRF9GMb1ns2LTfxvuohK2MZsBMWz492aKWgr85gPRhVs",
  "key29": "2B63RJHgUmDYpLa2BFdPszk331RRF28uKg4sw1ZJGMTw1aVURhxcA5RC9JqruC9TAFrfMuH44VpoHRDyPCMQ14Na",
  "key30": "4WML9kXJpha8fchZR62CvuUvBRp6bYtMRgeWxsdUtBzodaJCTGA3W2jssd1RfDNKAsQ8SNF48tcxcp68DfHkZP7u",
  "key31": "5rB9xbmuxqJrTTrMHfPC1Dqm7gMAfLCQqoZydJDaLU238XxDiNxnL9qWTtX1vYWvASrbbXggwt8jpPHoYQxM5vHx",
  "key32": "kPpV9y4W389tBKAmcKsniwwir3p7zaZohiEYHTq9dkoHteAwCzDv3HtcEJng3kHE9ejdgCFPeocupGWCDprkr8C",
  "key33": "2zMx8bP9UBZpYuVPx3aHDRDbcqrACi6zpJAUfuByJ8AR31YpwMoZGAoRUuBHeCuYXT7t7SSw14ANFC4Mztu2ayBG",
  "key34": "Nsh1CLJKajiD91rDsigUN5qxhCtsfJjDXYSgnp5DPGv9JaPSzLCHzwohByjGtsSDJCymGr13suoEM9pybdTaaco",
  "key35": "4gp2hLk1TQBD37pzWw8tJZ9vfP4ymD6iJD794vENkZCQziXBT1PjHEXGnzxHYMaye8dtCarER1CzVf25hwTrTu5U",
  "key36": "5SFjpJPxVMtqJ5HedcSkkbPRzD7Xor2EBuqHZsWCthr8YHeSnznAQeQQiyzoVEsKTQtemGN75JxtKsMx5R7jjwSg",
  "key37": "5SCWyfqDrYjCx7ftWisuWXKTsE75139kr7ywFu42imiZyaivSG7oS45mjdABQGqZ26Mz526uEA3f4YNdx4GQb2c3",
  "key38": "3tLzRnP5Q5SG8buHBj5pp1GUzFTsNacYPBHvkHx7c2qXS5ijL4iZth1EiDZR648qS8yyAp4sPNvrMJfq95iffuGT"
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
