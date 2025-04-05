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
    "XVkoAYQXiTFjBNYA1t67E1EooetZtaPgTQxtzXD8tYnZLzPNS2n7YzM6MhzcqcJ8ivVmoS5Go8n5w8QAzqmNh4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oVwZo2n5MDGvjkBAbVvpRwKEzvc8XmLftxxFZA4sxBKTe9svqcj9s1FGwt1XMocPZa3NNCBM6ZpKPHXmLDuTBUS",
  "key1": "57NUCCgH83Ce3PHALdosYoshjnQSrWPmR1ev1cs1WNVdMPoDado6y4LWLZqCzKmS1oY1TTpe7W6etYA8G8bo75ky",
  "key2": "3CZMTvsCzqhi4oDZSi4CFozTTPranXb6kBFUMasFF7Wtxzmjnv8wLFadWLB5ZabxxkqFRYQv1BcvkCExpxG49eLE",
  "key3": "8peYSv3NFUG5c7L8movdTkwnikoHjDwRn2cbty91rQEqBd2aZxrZKpWDtoebbvUV6MwDcoRX3mLjNAE3namFeeN",
  "key4": "4L7ZCZi5Cphe4aFv4FJQvHJFxNmxi3apAbUYjxbnGnAmW2S3UpuAAVhBWzhzH9ohhSzKTEFKM67dV2Zkr8xPgdHq",
  "key5": "3ci2VDB61k2GCvJfPVcsjDiuwjcbA34imiPS71gHNmjDxukk8V4otSmmHi1JrHEvinbSY5swGQf7pGAivTe2vVLd",
  "key6": "4k2LBfhvtTFivhzur9wCqJY2HXP8TpfwFb5ZBGGsLkeFr3wXboQVhBp6boiojUDnX63JKnCWd1r9rLZUS5pix9uC",
  "key7": "3tEgSQxHYWJZeEuDNQwTndhL4JEQjJ7eheRz27e4AGEutAXd8oLyFPrrkD1mp1o4d81vN7ujsfW6GUwPTKd4VMa6",
  "key8": "5RxwpTkhW6sQbVoxuF8VP65gGhFaPKpYrZH2U19SFYt2wwLF3AT5TZ45JaPBRLL9tvSFtKMREL1zmZcDCXGPryim",
  "key9": "vA4AwA9Jf9PJhmpb2BLuK5qnmqzkjcd3FvE38fHBgSgBPnjcH99xYjHiHhbLAawYQvhqM4pZyf5YmCZUFt5o8H1",
  "key10": "5p9pyeePG9mp1zj4zNZ5HRuSqSvWzy2EjMkoiyM8Swwo9dtiadcrMzXgWWbEPD9JYXVKnRfUaZs15RX37dv5vHuD",
  "key11": "4JZgDn8BivkuM1E7sEbRaAuHAft9UEW8CL6xDk4kMJ1fGCua74yCfYg6VmD87nVcsRZeQNWL6xJTHSdw4n4k8HXU",
  "key12": "jSxXYRC7qvX2hvXmCEvjgcZ75HoxAFjwCCHXErBUGZaWSriDShdwA6TQHjDtnNUZyLABUtLUDrc6XFv1ExyF8Ga",
  "key13": "4BFAxuTtU7G23gtxvJs1BsfguYrbJ4R4ijZ66FV2QAqBDg95NUxLoCNCPThLcSPksgr8oc1CCSjEMWUCWjDSZSLq",
  "key14": "j99Zcb6mb1yTYWcnLRAdN5vFkpk8etQbmgvxN3U15JiT7a1UMthoKDMj11pKsQduiGRWzqYGJozgyjiGPamDw9y",
  "key15": "2bW1JdduyvsfqRsBeCA1rSQyHzGAo9ahpAVpznb72RvwzbdH6yQ1ruo3CbfmtBxn7eFKgURhoz3CKkyqsvb2H47G",
  "key16": "4WoTE2MwFP5oCKfftBCRknfLy7dUAazxZnzAYahQ3akLM2JY6TndkiebJevmEzo6hjFaaikKSbPSBJGndCpy674s",
  "key17": "2W5DLkYzpXYfLTaQVgggBbfaKY7jzrxKre29HiXFB1GyNRizGVXWwxrtowNTjE7uyvkUHp34Hqt9U6SSmtmBPX8B",
  "key18": "63RB1AZ4qbabdZtTPsQorcauvboQVbY9nf72LtqKUaQHsGnXpZkdpX5J5gkWBy4MvmR88Axpq1LVDg93JW1MBJVA",
  "key19": "2DHeQTJy31saE74PD8nAPC7hA398GEoZoxx5V3RXHcyFJBY5mHoQrYuuGs7PFXe5ev1vvQcQKSATa88ZT1cKYGGK",
  "key20": "3BxB75vLMpn1G3jbgBFPVTP3ewo6u61ehZ96xG1C7Xqx3YvpXVorM6ZLEKTaZTqpviQL1GWvZazSTQfBkwMTEJXb",
  "key21": "XwE7q43ig8mZRL8nGRPwPCfnvwvRkT1jJGXVN7GvJfsqCM53g3rPiEBkh5u2vUWQpeuw7Bcxx1f9993X5vHCci9",
  "key22": "4GYFQoRybeQWc6BmaV3Yk6WPQw3JTAA3x7CJoEo2ddBQ8mNoXWNxzWpCyxFGRxRpBtJ8h4ha6ax2NJ22YXoPijuY",
  "key23": "2wvE9P2kQRN7asFVpgyH3us9jHLVGhumcgSmucsGdL3t4GArHmu9Rjm7KhsdNviBT6k1dwdQSueK7gCgfGjkG5vP",
  "key24": "5PJp1F27mqmusrCPmZfq3LNtWEcEnFqED6ZMQ6wPs5Z6guP5RJAcMBNUqSrF65BtzCeozv7TiLD53WBmRcrmiNNV",
  "key25": "Ecb9JDKA3LAFXaZYQXr7WxLs83o5R5zDGc1WB1qcGFk7KkT7yYPJXcLJM1JghUcJEZvDFmnoj975XPdwtwSFXyB",
  "key26": "5hzRBFZTpx4WteKhsfMchYFVXbSCuMxt3oqrjsrpfvYNQhudMZ8drMhntNiNx5MLK5SDrT8vYngChauyXSWc4jcY",
  "key27": "24UPSm1FnwsULRMNmV4He6HQviV4M58tKSuQdHFmhQLdtKtwu6rABYV8NQcqpbZuAC73Vk9SVAvuBSHspPsFsn4w",
  "key28": "5WxjPCRhjxurCH8m3mv5dHfByYmtS81CLZoGtaUPFXAE6vjjsMDaBQLmfSdypt15zUwwCwy9euyZcrSeFBwqadTD",
  "key29": "4S2iqJ6zeqw9CSZSfSasJrjEdgC2aQRkrkb4si8DgZB8XZfLTZdZHssypuuEHSzH8GpqJfTJcKE6GdKDjd3mvSiQ",
  "key30": "5K3RiU7r5mDrsT2vbdig89mFA9odhzrEfvNErqiMJ5CPK59ug8P6VDLRkwXrniARfSeKqFkk7qqvSZ6AkvmpVayQ",
  "key31": "2RzhLx2wzYoFqPRqTXk7NYYyzaBn5sZDCGGDyZ78z45rd65nMW83UdRJtby6E3JKksB2RR88vCggtGwobbBYCH59"
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
