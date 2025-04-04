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
    "37yz14QmB1hrFQN9fa62tAGYRFBJPYoo8YkuGKNWHv27uXVNnPXGAdNf5DtNH3SEZtHWgnykhV1kUoEzSRMoqyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khhC7TvXw2XvBco4cm4bU5yMKghm3PuPzuEADSX9EthnAeJVUc9t3HRgJ3h8nprJY3UrHUn8tnt2Dv7sauAZYKw",
  "key1": "4PvNkxrZmgYrqZNxGfmg1pnW5kBdukG972SirusoygGVMgeJPtKDqo2YfSWrTugFmELKt6msigNFymXgFB5v4Wx2",
  "key2": "5dCoKxCDyPLiVpU6mQvfs5burNP5YBCZnWqheZFpSkY561CRjB1heFA8sr2zD2zsNwWCTcpXqyTkXm8tnnWT2HpT",
  "key3": "3SxfLjDr8NMFGEQ3rTGcKyg2VQCvxJaWehG8CmNgtk6SokjFXk6495wuzT2dKNHLSHYoQPX7GTDAmsxAaFRwqv9C",
  "key4": "23tfgsGzDeSJFa5SYfkD8MULsdMd1RW3uSi8DKEuvM14oPb5mJsMzBUxJWGskGip1nukhrEttuHaXAJqKqCJGhZe",
  "key5": "2qYrrUkwkUZLN8Gtj713f6FsNkGZ3LXVUtiB8bUCFZYiEpEjBN2giCoKarZT1YXKGba9QbvpqvvZhyVGUUYczFnF",
  "key6": "3oe1PXV2Tb7QRj3JEWY5jQm5kvLj4x9UWMWYVY4f7QWGHDAnAYvCp9p6bbfccDknJDxHfH6HsaFzssn8BtvnBW54",
  "key7": "36tkvjAXy7z19UDGbpY4KmpPTCsXzB1fiS1cJ53r3vK6DKqaEdMJQp2cVW1XZMnF2u615r1xYAQkXSPciCrfGu9m",
  "key8": "34uzv3bDqhHeFc2NNY1j41CRDjGAZnqqVW3K6eL8K5RjruPFKZ9zDCC2iZyNjQBFDRbQzqY3TTSydj5yqfUCicGy",
  "key9": "4zw4uzowHXtfgYaWZ6JwafJfFCQDGsdRyEzUs6fWrTjoKLj64istkttfgT8NMKLPStp6AFLdMxr8iysP85MZ8Sim",
  "key10": "5zN7p3j1T7STccXuhUBPofphWBtPVkoLYAV8ZPn8nDRgzA4YvehonTT9BZFKJU6kVsvabhyArFaQC5YVcizrLBKH",
  "key11": "2JUY8ziyymRCiKGX6DtsCd3c19hknYd7ULuycHuY7ig2EzHQq9YMEZ8AVvJSVczdcFoEG5toNxvT9dZwFZLEvaX4",
  "key12": "t7RNw3eSf7KU9TspiYJhX9hJA965pW4d4YHcxBr1g8VvPD97gc6Dpfw8bnxPTn5oW2CcBcjXVLXZporZSv9zoWy",
  "key13": "2dyMPjSJJBgf11smPbi7BsbAXQciuBXE61or6pYnLk5nnnCSv1M7bANKc3EbVHMAMqouCrhzqUQprrKizPK7KiWY",
  "key14": "4kVB6FwSwvKx5fgk18qi53ATckcakd1o2m6QJJ1R6sJwtR4idNurM9hgPVa2HsHuib6xBHPeU47yri8UXxHcjY7U",
  "key15": "4JQxsqSF54xa6QAVacAjjHwWFGti5buAZFvhAHG3yw6ae72m9favEsPWUiYL8Gz8hi7szCdRSooHyQZXoLkfz397",
  "key16": "2TTy6zp2bvGfYWyGEHXDeTMz4Hz8WdxYd3cxWb8NfqVZK3SgGnT7huEp5aHMwfSnMTDMZ2MwkATwZfAdvPzAZB6h",
  "key17": "1PE3Xsa4fCUqojPUvz3egWja2WS5CPchwx6uR32Sh4hwGRE9n2F1f2rMR5ceqKPPgcsBNUyQNxn46xE3ZqsD674",
  "key18": "AbUFxLgxy93hUNApJVq9sMN1tPW8RP49cHSAE4PACZy84xwLNcd7JcxX3A1QoR11LRoX2Du4NGRkN5md8qRyKZG",
  "key19": "2g153SsXU5wAcV69Fj6tbq6ey38RZyyLcNCQWdapbYGWasWtBAM1yFbm77rME5Qk7wutmvUxNK6x7FttGR88vhzE",
  "key20": "3Q9JusA64BGNvhiDaiprF5chLpBCuatfZTsReFodjJoBdDEqbcwADwu4MQtJn2ugPbS7j63hjpb55z4FJ1qEMAsC",
  "key21": "2f5pgTibjcws6zA34m8gb8VG3Hyvt6RyhvPTXrCZvJ2o65uoKdM4AcG5axDsmQkReNgtVqUfqQzVN7XDjULjatGj",
  "key22": "5cxHLWmkj2iVmEk3F92nnU6e9bmuGCmeHv8abdNRc7DmYDPwpavuxgV2AHSF8PcYRsz1H72p2MUcnYo5cE679qqU",
  "key23": "6ovxjxv1uBaR7x7iq9fm8pq2NU2MDTqbB9pttyfzVuYc2KTebbw78yEB7ToperzKCvJDwtCFf778jv34aihKa8H",
  "key24": "ina84no395Yo5kQvf8i6ynxBANVqbUDfs3nAufHBD6uSrR18ruiL4NapVed9cgRkqWitnGn7dMeqAbWqZDVwowP",
  "key25": "3Vyx3nVTVqX81Bv6TFSPBuaAH7Q4E3aZPP1Ue9R7hgz9D8MajYnsVYVxujqRY48qL4YNxaxf6av43PzN9ohTuoTc",
  "key26": "W2Yqy9rrALP8qa2oC3EFrnnrsGmj8Rd6w4eL3hRCHyxZ8pXce4CnBvDArAg3uHWczXo5fMXM3w4sjbCPQYCUn4n",
  "key27": "2rV8WMtiew4agYnEAt84aAWLzcK9exHqKUS1UMqyGV44XCBhhBDHf8cPs9kB7AfsDNWpYDraB8aAM4y78Ver4Hb6",
  "key28": "2ZKRsMbeVzxPupgSD8rLQSogm8kTQvJLkgcVEwiKN9DXNJ2nN361HoHJM99q7x5ajVYVJ2CEjL8MTYobU91Yy81a",
  "key29": "4GPToKsnU1aPvrQQ4Fp2dt1yCFs8W2vTaMjsBVQwdaereR9TuquLDhYkkMtMLBYcmH8KJvT5xw9uGXVuughtc5c3",
  "key30": "ekhwiUSgDC8TJs9JiiBswHmjMWCeHfYXTx8PjYPs2EMEiTdgQhXvQJSvBEEErFWqSEL97T6xwinBELqWRkU5f1s",
  "key31": "4Nf99t59FY2bDa89zZoYnVhak6SnEREVYWBw8zuKJyxwpGpbrgDUxqVHRWx17PuoQfe21RUn89aHWNC71c8bFcVY",
  "key32": "2mroxQuhdgUZa34i2369e6uUdBNUnJSvV258CsPmcxeqhzSw1aJKwcvTftxTSYvz9ZGv4GJJjhtG35gSUtKdMVV9",
  "key33": "4EXvjGmjNiDff6JEtJHV2WiHgXWt3PuRMp8qX4NTfKHj3HBTD1Aus5YSkCaVTB6TpLGD3zNkYzMJF71zEohikSZ7",
  "key34": "2kCA5fV58YKMh6Gb14wZZfjRkGAX367kpuUKbtqUqhCFy3hPHZGxGLp9T2tggYBPRVEc4ETTbSKs9gF9FBKCQ5WA",
  "key35": "eDE32F9quDryCe4rSuXAAttPbYwTQfU2NqtVSvzbfeexRA3zUwAVqv8r4gHp3zSdkV61GqymZrfphS8yjZoqvQg",
  "key36": "fQGWDdft4xHBd16Pj2V7FEHsU6TpYVGSvHxoumAj2QTcdkU5iPqvHmse83iyrypGei9jgnaj46vmy91LSiX6zzC",
  "key37": "nG4KL9V26jaoNthHAidEDjmh1VokNReqdytaeF8M3kVbBeBw4fuTpSeTvZnDwnMujhF2f6DsW8uxceuvnqq7jJG",
  "key38": "2o3EKTKaC267K4TUHWX4gb7654Jpggz8CicTmWnLbMJSemQChXZmMMYuTJtv9DKzv7BPswNEswaPjJRWxJagc8qY",
  "key39": "36PyamvqyVyLrjork9HSoLWxExJr1gbE9VCu828xTicYPZMME7Up7S7yEanKf5rG9AQE8V2brtWgiotWtMDxc3Cm",
  "key40": "4E7WhXE45f9SPBGF2HGsouiX3fkgyH23bqexfppuuUFQTrfBZmtd2ZHWLS7tLJF9iu9SEENMRe4DnWCEJYPSdeJt",
  "key41": "4x7hRda44XiMzNaXHvKm3ifydji2ZCtJfiuJTPSrpYqKWeuJYxB3pym5TeCyET9Zr2CypfJaQ8Trui1VF94Eis9H",
  "key42": "4nNVPeQzXHi9zbLAMzUeuMRfFn9YmXiZnyAHq49nf9kRKRgnNK9GiAKGEaJL3WdEG24CsAseRqnTrhUWuq5wMf77"
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
