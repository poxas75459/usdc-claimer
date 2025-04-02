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
    "4qMppepsnEGvWGTrF61hURgKDcPaXWrgspwK8tdDWeZwpqc4vpgfL8Q6YEy2BVATLLk3TGFrVP5qAJBXr12rSoTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YC3uRQv3DXrpparj9q7RfZA9iBe7U9Qzq19smM7Xgtu92Aq8eNbH1vGGoTb4XL8MdNMUYTKM8Pq91RemgBDEoYd",
  "key1": "4fMpVS6ftSpxpLSeHDRhTHGywkjEpWSxe5pnrV8ezRc82i3HQHbisQ2AjMAzrbRXGurVrif1X3KufXqF2MjvHPc4",
  "key2": "gt2uoTZmJtT2oq8L6XxHRreiiPd6mxGXkEHWWwTwnLf36Bnb1uSBQYv1EWXwivJHcLgsiM4yWohmEc5qwo1YBfd",
  "key3": "WFjNfHTxZxEVuge6XQqTCZdGTSDRJ1fWfsUJd5D6TJdeG7QQzpBKKJp3TZd4GSLeYr5euRXtUQcz4tb9YMdoS1L",
  "key4": "A33dibHNG2zaE98qGo3ccVixcBGVarYxsfVAnUNMWAnfA6TpzBGH5hnXgyy7JLXDktDJaX8fnNr8vLXVcLxnPt6",
  "key5": "4bq2baUPP1uUo9tvZAxoWykGrXERfo6uWhRMQCTfp9FuC54A6JLaFMcEWeUmG7JUrnzWbJb1MbsCvFo3TmtC5wxq",
  "key6": "3KHwKqaxUytjeyYGqDjY83P1ifkoKWfvXQ8tnWVAHXCvJspm3yBwTWT1UAEzNSkugPNYZE1zqGM69e5TppQ3TjcC",
  "key7": "28ZYDqCbt8h3AV6Qds6ty1UiodwNE9Y5kaUwgVa7F8x1XC1TcpSAseotL699f8cPMX4ttt9mFKZAWyhFjbwwnZ6S",
  "key8": "3LhYiFUJ9h1vAvFyoQgGijcYLyEdBYJaSt1ze4ViTHPeUT4Br16guNBd7hvQMhZaKqF4tcP5rJCHuTWH7c4g9cLP",
  "key9": "49eSNhgSe4cVpRgZpwWkZMC1VseEKm8dwfA7fiuQnSpVmBxqMFbHwUcohN9xVQZwfvjGTNXkHoEk5eopMstob5jT",
  "key10": "2oZgWg4SyXtYyUmwBcf3Y2WFFfxhJ8bMKG2s592fQ56UUpWRc3HMzvsmBgJEWJCpVA6T8SEENH5PKECQC74RCKGv",
  "key11": "SibBnNf78g22JJR4Ea61WmPmPGwiHaSb98LJp2GtBGyuhJAkxaUeReseqVTapDWX5vc2n812utq7HUxBsDr4GAY",
  "key12": "2JoD3NQrDUHoWFtkxTzEV742qKbqUeza4HUobzbvAN5EkLrNynxpCFhUcZupxAcqQPdXsJoTy2j4HxAF2c9Pqw3V",
  "key13": "4yv56rm5yq87dUwLjgvUeXzPF7zYEoA32Mx32PpDcyddd29qSqWEtnhRCvybg8Xw5gyZkqkvMbqaEYTWoBHXoDt8",
  "key14": "2moUDB4adTgARqLGNP17WsfaaeEY76UaowT34pGmusDy4VhrNuE5KfvKWWFga2nTVnqgazbyYSGNEZh8a4pB6GtH",
  "key15": "3RxvmSo81ufg4X2bgzhMNdP9w55yBtydee2LY7Hc1wr7AKUKLkSByTiV9X2rcKH1YxxUniB6QLYKz1HRyzNJ9itq",
  "key16": "64NwsavgbyPMrXXU1evY4MEzfMdvgXnN33qb1rwaPEZ6Vhscwy1izC18XQCStnhUZDE7vH2Gs4EPPsVP1Sv1fj8J",
  "key17": "3FuRXN8wFUqhK64HxagTLzThxCcNSF9dKFS4hu5buiCEXzWL33n7BYs67tHcgvDRzFMbuLvKzPxZTxPFugzdxGiE",
  "key18": "39WTKbVio17ZAfzh8hqWLjk1fYheyHniMCQSkEfmvc98jgv28heavnx1UjpnTmjhKa2XiAGD1MJCHFydq4MMXDWh",
  "key19": "3PdsQ5Y6gBqAwnHDzXNXtRQWkztbj1qzBvLts2hfXh1tnd52a8TCbC2N2MxXyA4bcLUqqWCD7Cs88feh4R2hh9ps",
  "key20": "2F4UpXxAfyqnqQ669vQf2yq5xneSR6dbNUQypVN9pjmE1rnhJeNwv6CfpQgiiZGyizpQn7vzgSoAngv1N31os1WY",
  "key21": "Nx7A2MNnioqYRmy2y4p3vFMq1hxSNsh96A3ATtEwB1i2HCb5sCP8LZshZh7U99GmT5eRmAWdFapgmamTu4isAvJ",
  "key22": "3skw5VkVvFL7CjozoaUkTh1m9Ye3XTUwMX58EXPZspoHBzQCiiQvDP3C4QhS7J186iWXd3TwPuSNH1DXaBQWF6Ad",
  "key23": "4MBGWb5v6PfJicZuNuDoJS6aezV1NcmRezxTGo85aWX8DwrfhHdBLdbpQDRfckeYFsVA5sgruEo46nPmQe6N2M76",
  "key24": "5ZyrT9eD7kaU8FnjLKfQxZYketnRxeWTdeEWGAfnwZGh39cmUL7P2nZwZTnRaPQyCJAGAAKZx9VJSveLcX7WeQu8",
  "key25": "3nTrzPghtxQpEnAVwx6CKNnbJndiGm3ie8sS8eQreE9pYdTJCvj21xqi6pqLb7oGxcQnN7GbowWy4T1Y7k7daXun",
  "key26": "go426HGsWSFhAT7FXBJ8QTQjdtcBprsvZP7zxHydqfifN2Dgdb4mKSgo9JN55MH52nDFfQdtdbTi2tGeHUq9kav",
  "key27": "QsHTb5CuxKbE4qcmnvPmTJFBjqww3NvJkxGzPMhNA5Nfe22kZbSdskRrx2MfupNhXzQccPBan7uQjxuPVNaoaH1",
  "key28": "XdFqFS648E1zEYp6jbSWHjfMY6oFSpSZsYFDuuPoQJ3CWkvLLztrXPsxQC2kT1xen2QcMsBjfr3SH9d4xRezHrv",
  "key29": "3VadasxMTS6nYL6pcxdXurRPjR2JLLnTSFbvLtyGNBW9NiXeXh3CVuiaXx9otoiz9AJ6M5sa4TprPov5fWYmmFT5",
  "key30": "HeAd63WCWe1TBDDK5A7CmRsPW3SnPgYAvCaHymmeWbjButfxEbuh7ZxoX43kLwN3vfhYzoxhS2yk3SiVmqU7Wch",
  "key31": "5oneoPoXE33NDGmn5F2ek9jhb49EzCfVYStatFHPN8WwHagUCj5ziRsGrwqh5CBm1ABGZKDChFh1acDwkCmdvVnB",
  "key32": "4V4RfxPXW4y2bysD9qc2DSyo8ru32hcHm1z8HqzbQunVDCPhFPXsNp9FGfkeEXbHXHVrSqkACvXwkb7LyxkMksNV",
  "key33": "2QmZfoFNNXEfqTvdLf2CUiKR2ZDsJBPRJCuL9vey83NSCgGsMNTJdez3pSs1j9pJo98tVtF7CKxZA8THaiJ4aPoR",
  "key34": "3MBeRK9uBQ6TKLuj4aPaiEHFuzptpmSsV8zUSLHgSCdfqeyDpokxzgUvBDsEhKhY4ErdquxAmsc1AUQG2zCWDmgy",
  "key35": "2SSvNCgyHMbgcRiUNiwbPFuPDwY1YkX47ttn1AUAhrFBE2tkvJHSNu7E1tHXW6LdXXtLa1MfKVKgjgV4Qm2gjo88",
  "key36": "3uD4JjejjjbHShNnNptcwyPXPs6muyKvcGY6rUdJbQ8dxQKdX43ebWRnsguFKhjHnqgQgDjixfkXfFArAsNx2MM",
  "key37": "m8iy5eyaaENYkDaVFi25Mjv2sfZ6bdaEFUmvAvNmEgDcEiUhhuF8VuedGT2Qrtri3zHiQU6daezz3gxV3qqh3jC",
  "key38": "5sKniakrNhQXQgo9vufWUMdX5354PBvSxWcyPUCpsMNENG4eXRgQ77uYRrZRiBxPBQXQ4P99uAh9FgakKWaojhQa",
  "key39": "51DS1KTfeD1ewu2tRPh6UghDkh5hiKavyjqVGYbg58SLa6oQYaXHWHEyyBDhvQRXzjypsrsdWxA8JeYP173aoR1P",
  "key40": "5aYuj5EFrirsYcaYCZeNx2dqv3BShe1LEAstb8aoEa8XXQEPLHJLfYwiQozAnBYy13hcqr26Ajfpa2xGwZZmFqZQ"
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
