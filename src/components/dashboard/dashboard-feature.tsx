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
    "3cpkHWVdq5AK71xBiUQiBs5Jgoqqa6qfMdHmLTrM14a21p5SCBiCVCC6zmrzcGquAZctBFsj39qhcmbVdZqCRefn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jwwXySdPPGjph49zABsAsWnRX4Z86pDtSnHmqsVHftQTmCrtuvfxYhLNeAjRCq2dFV8uJFTN4Dvg54F9CzkgxS6",
  "key1": "2K2YvwoSy5s91RXGHcvRLLSm2apQQMPjbEchm2N3krMPzvDzWHyek77gboLuyuD6AbDB8R16QiWojrqyciDzf51o",
  "key2": "3pfECHsHJVoS79Bie4nfxp8oEsQPesAPGmmJ3MVUJEGSYy6TcptLUPeuG82DtJYABRaerVLANtg69UTbQqRRpHFn",
  "key3": "4YVU73trUsizJbjkJ2LMqEB7Lb6DaoSxzc7bp6RVAryGrnYvYVZ418b9WkhRR3ugoc5eb8cGZKsLLp5uv5fFUsLf",
  "key4": "419qVGQYT1PN33BxX4pu1mTBLe1iSqhNtaPfhdjZJSFZnFqPFU5NZN5KYxtNqEdPLQeGdMcaCyTFrzHC98asSfA5",
  "key5": "YbXsseq5dnxr6dgnyWkuvNwWnPitK9bBVurC3j3U5AfMBuykbjCAV3boPefKXsRoNXVfFMDPn6DUugUkA6pU3MB",
  "key6": "3So8rtscWiZfQugPBh5MQGfi8jwNCb9hVfuwWePd8H31jsZRjGkunTnwvx75CLM7FeQjQSDM3SdVnNL7h3HgHju6",
  "key7": "EY4dgFxc75tv2UHzLNwurtGwjuf5SFaygJbrVcejLGqSHQYUnRoE69bukAWEWccZY3bgWVDoJoMywsWcTLgm2yj",
  "key8": "35kBDQsocuKxTHqRZxCW1HwTj3d6oCbmXoZ9dpmgJPopthgpKCztLfNa54nFrttwEuRby2cuPzt5eXK9ZJ9ZNXer",
  "key9": "Uj4Dm3SQ9jnMJZWimW4AQY9cEFmqyrNU5pheLaqXZ9V9KGTXBLADBwCHCrsFdxezRceZW5MCVsJrpevRuz82kMZ",
  "key10": "4hzJxSK3QG8jFgH63ytFhk33mNFKtbjQrZAJpnqauHiWp7P5PYHkXjM2SEE39WPXipn2EeJmVfHbpyH5rLwfp4Ni",
  "key11": "VKwfigriysY5dmEJS2MkWfNcupmACWfK1uNb47ZRWV1WnkQ745aBeqnZ93y91HikvnN6rzxJLJFKGoGBGQx44u9",
  "key12": "2WwAwrF2C73Mjz7CYMKsFdAtwyJnjLRgGLBSwbyRLiwT7RZXjRFPeyDhcvtDEXFpCmkNzssSwBeLVhkUZynbUK9h",
  "key13": "5wgtcyFTquNCpxJVgzFBP7jYK8VVQyJXi8eLDokY7LZepyL6tvgid7w27hmFChdFHv77Kewx5TgeTvDsZ5nLP2Yp",
  "key14": "633TBjfrBuwbu1rzJJc8uoGcmHLFPzLeG2TeQ7cpw5MQGhG7SgXRQ4yPdNEXqXRvHBoseVhxKGofqiRSt7R2wLZW",
  "key15": "2BGF633CKHEMukYmWyTcmCmYJoXRQnAeWCbiYHL1wDaFiT2w3P7YEvvupJLYPWwFM4entFEoSqKUVSuH7THjwT67",
  "key16": "24G471kzuGtBxbuThwQfxdzasDZhZuCieuo59iDCzB18W2nUVcNEBXP4Mjh52q7RjSKDhzJDcqadq8Ha8gUQfZ9g",
  "key17": "4rLfJkbhntAESo1BoMPYqnTSosxdM3SWMMx95AzSEAJotaw72EBQQBZSYJjvdN5VbkvQxTLLVcFrea26jksPzeT8",
  "key18": "2wB4yZ5Q98rJ5cW6sCh4HYbHyAt28bN4ydG5YjFrJ4hBGzdGu2fFPu3Gmte6NGZd3PqkGj3QvT6cztGiQV8S29kH",
  "key19": "2QYURB5TbouiwfzSrcfFuMVHoTue8UKyS77AzMfmNspbqR3mLLQkTNfNtHhHsJtX4f3JLCKr4BEeoW9bGvx7TUMV",
  "key20": "3dCcK5mrFcY2Bu2soTZC3qgcLjCUNPq9qdcc2cA92LeLemsatFaV6NSDSDfffhmDf7AQpwLitg9MEG7cXLVnkxPR",
  "key21": "4P6rS2dUahf24mt3DwfGdHFp3NKcTBPrbGthpRtxAJxC6zUhVyPzRTvRwEYcDkYDHZcFV4g896Jzp46LZ8isYdU6",
  "key22": "SB9eRPfcTKjjzckekHs9q8dZ5RDuq8UnrcXsdmQVp2Zh1ssEWThvXeieXL5RXk2pA5Wva6TUWCEVasMTn3uvMac",
  "key23": "62GZbzr5pgkNLF5sskzH2n5Tkds5y84hXQCZ3dER9zkiRRSHAtBu6s85p7qDPxcEwhyzdj7sg5JqFxGqZL2Yvk8G",
  "key24": "51dhY2yJp4MdXV6rmAau9wSdCZDhDJzLDeb92wSPjAhtDmkrF2J3WsSLDguvR6JHW13kYeUE2Vp39CV7BRocPgpZ",
  "key25": "4GE4f1GQAvb9ZEbcbE9PqDzXywXHLaeRezcfr2sgJSJ958dEbZbtPgaQP8BdPsRepQfa4D6Zqp1qp36mLuFjgDsR",
  "key26": "3FaMD5kHS7jrUeaG3gJBrho5n1DKCvCdRLANWgXyJuq2frnojXzP4WdtEuRFKQNc97xnQ5PvWraGeTsK7HkANrUa",
  "key27": "2KcgJwGWgsn9UY18rockA1AEHoWBNzVuGi8woQj9eUCWYFrCmTf6t5qfxATQkNxJbMn9anmkZzhL2HZjHZE9mbzi",
  "key28": "5LUGk7e3uFN5gVGgERatuEuEkivHLo44KLCuviUGjXi2eFQaieT7MoEb2p9TVzXUtXZU1Rw8wVb9oVWM8d4XUWj3",
  "key29": "jnuWC3z6nmtCKQX3esfQ4CyLVp89ApimBMJ6QC82ufZFfcHnhM7C5JARi6d3BuPYAZcmA6sURJ2q6YBGJEbmYWz",
  "key30": "kQHpipRzLZRD64ejpyg8nW8dMMF8VUFcKECKN3bb5WKn8FEUQd5uqbxdtwNdAALdMzh2CEryvgLAE5tS2C5omS3",
  "key31": "4tzYvSmd4R4CjeefSCUeEKcUobW8mcxK7hXezysMseBbuDXMw5SoqRBhAebu7R2bHqfcDXufGhpFPeFvWUgW37TJ",
  "key32": "3i7kJNuzhirMyPf4yciGkk9rzJuEiGa5Pc4yynpK2FdRSpdAAuZ62Wh6DASfYAVAPhcX3AYaDUAukhJ1XhcUcK17",
  "key33": "p1xtSvSYW8n4zxK6ey48Bd2TKA7V9UcQxAgfu8dQWXLdUnhGYscadAh4nKxumsTwsfXykkg3EoKHGYhot6weuFy",
  "key34": "56eWSoELSzDFup5BBaM67j7SuKtMXMiu5poqFDgs1qZgqhQqN3rwdteyqhyjctkFNxYoGJXDhRDU6HDXgqDBmDF7",
  "key35": "54gDY8npt6v3jAo2RhH5cBHkHZa6g4U2pYDfLSCY71nJSL8GiXSK5xPBRhCNtX4jKByfn8mXzaAk7fxtsrJAMYm6",
  "key36": "279kHoRBJtELzyjmzq4Miv7W8Vdi3UpY33Kdi7nTC2muiKhij552dZFSmkHhA14iQRk63ZATZRdmxYUwiMGHorh7",
  "key37": "4WNku7YcVym7mkNXX9to94Dvq7YZz9Sccr99y7gwu71ivX33hywnV9NyVF8Go13Rahzaq2fEETGDoo6qenxNd99o",
  "key38": "5KqsLmcum5xRJGXBFUynMkmAdudfKnGaKQr29pamU5kPWBkbGxST4oXfWCquv8ybL5Ed8RbAPe7H14P491tYvBzG",
  "key39": "3Cra1fPxCYboT7QtwuJPhP6dXrmrwwjn7P1EDGTJeirweQ7GqqMjmXhAwCVmCnguRYDMAkKkD2VpUiVWASXNLPjt",
  "key40": "3EnWZa35JfjrACgTARhciJd5QgZezCubd4z8THnZuVxiae2MVqs7GFFQZie2PprFDJMthhg3BxX8KvWzDC5HxH5t",
  "key41": "4mLbDiy6KPHTnmqyMKzjhXoDDCmyk71rLsuPfaXoifCqAqs4DxAnwYoCkVJbBQbNgLHD6BrT3KE2126eF2Engjva",
  "key42": "3rrTgZVaF1cFzzXRpDPAHcq17yHoPAcUSbDta4qPqaiubykwboM2dH2HroqvRp2ZBzcSde31CwMM77fBECNUWjJr"
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
