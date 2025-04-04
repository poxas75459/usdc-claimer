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
    "58FqMUWjen3jdL7dNZDLhNonjbgmvLiGWM5AgS7vCSpfqNMsdY4RjqTj3gSH2NepkfsbdwDUUVh3Kg7zGJNroEVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fzqcxodx2bYxB2WrNU1v5qAqywgEzVTkVpHXLqyaUZgwEUC9UdzkPyyEWqzizvgNmwk4ezxjSFCzutaeBhe1B8b",
  "key1": "2h217m8G31rDUfPPjcYNFgRTebXsK7TgcJULaT1vLBn5RSXHU4cJ4VCPiGF9cZMDwo9yd4r8CggG3s1H3bVgwsnG",
  "key2": "4nmM7h2gc6PiPvrwb56tWgW26VSWzLMR2ihJGKECRmYu99QJVSL5S4Kd8ahqiGFgheKhTeTeTqMXxNLnmNgFXTPz",
  "key3": "4npBksj6ntPv9RDUTXNYPtcd2dYdSTfrsgvRnZEgjKk5XS52Bai5QdB7DexoDmrUMDCSev1ztDHs35k3AVBfWUf9",
  "key4": "2CYdRsAyP2WFLrBxo6xRWnfXHV962u3CMQFbq3Nk2WWPw3FHn4VzgTBe6cvKME6ZuifLUY4XBrznKwN75VqBsvuL",
  "key5": "5d8HSoqwnka91wxjeZbuWA6CMMXKUFmKmQ6RVEv7HXxtDxD5zEYksjvUjLv3qpNJETKstYi8wNHsuqCtH3pJYnDV",
  "key6": "2CeBGpNU8dUaN9CohFiBRgRapQmyCoU9BErNVHetdkEncXkwwvNFs14MYeK28pF6h4ftCejtzzvSCStQp9R1EALh",
  "key7": "5kLZTNopiyNT8Aj1KBvQRPTiAzD8urDoQwYo9GTR8JAkESDGPRNEW1AB94vCMM3ZG2dKGMPEXCa1y1gyQ5V8awWo",
  "key8": "42zfMQZNhF42C9GAaxntLenFUn3pExgYZisSV4xF8u9gtm6UjBYAEgW6kQUGF6waYpMmJJLRVdgr7Y4sVKz9LbSk",
  "key9": "64TYZjfoGePD2yeXBXdLk6nJjZ7rwim6umV45kJk8eS2ZmghUErzRtSQYuavXzWw5K8cdNuaDfzzxj4oBrzywtPN",
  "key10": "b8pKzN2M2TVPYNzeWejGqZhS3GxQSFAQ4ZT31uHdkzCNDvVhnyVFp9nAZ3JyBUEZggZHuWvGsxWHQ7uHrB37SpG",
  "key11": "5uJBxpHRuEbpwP8STq6PooE37R3w22RpSQj5yKmFHe1HebuE1PrqXjcCwbxQEE3DRziueZD2WUxvH2Q4dHhaTrNS",
  "key12": "5mAfd6sVdia32pdgP5wXvwrdNADhSXM3onx1CMaH4NWTTa8uyz2s3x1hE1YMPsvmCzuJrZqaKTc6uBEFdWsQk3dG",
  "key13": "2i9F5tFcwszt23XSY8DKKNzofgthcyi6yDQ19wMGHLjh22P39Pko3jKQZMfuMGdRzjvKSuryxvE9Pd74zhYAWcpe",
  "key14": "XHk9zmguoyF3ULRspo16tDpCfH7xxkuXrT4yCo7TRDpQPikGaQeGYkmKKRXRYURhqXsYhSct6z2RDzjdB3ubeR9",
  "key15": "4KEbaPhrc12Si4nkiNbSFQuQgVB6VqhLrkeomJGvBbP3XXfciQKKfHew33yd3UhxfpnBcUAZxSVLhMDpuJZJ7uNc",
  "key16": "6bYqqqdmw6uweyoUSnnQZygyfrHxqenEupSqrHfLjA7KcmWfZPHuU56sFa14Y1vpfErb3BdgktU6GogwKUPFoRH",
  "key17": "4oRj63Dv8gSxdz5ndH9DVja9ZoXiuQPu692cYyHTfu8NeyyoN4FP5X9bgoMKsHPCDdZkAyDmfgDGyBaaNEJTnyoA",
  "key18": "5s77ph3LMH7qXp9imjbeaJAZGXpPZaNsGUKQd8L9ZbjSJDktjj2QAaYzMoVsJwPVkoUD1beDpGmQ6CzWxxgwNSXb",
  "key19": "2hx9ZaPbKSaZCyNY1xiTr2fsqKPPkabPmnMgPQUFNtKMKAk3RF4sKyCt1gBqKxW23pA3aBixduaAeBNTbMUkgJk5",
  "key20": "wqfQZa3v2FnUq2xiv4gMMMYN29ExGeNSjWhq2wwYJUgp8GxmznGdc4RXcYCRX7CcnxfdqzgFpSPG9GCLrk8Es8p",
  "key21": "5WpefD6cQqxU7PK7yTLvMQmTfqcX6P7i9UwAYohhMJ2ZTgbLxiUcmxBRVaHBJnSPbJMfvMJNPEbcX1FWwWkAuMXV",
  "key22": "4QSxPC5Wvcaa58fYR6Y4n5JW6fwYjz4QRbdvRvfxnAHR9daRAhnTDMppY6cobyJVhvY1aShiij7r2c4e2y1jvqoG",
  "key23": "2EK4stAFA1fu1iTpJmY5ioJT65Z83SdRgmc96jGD4Su7waPA27BLxVuJhZMhKZxPR1hPBWbUXXBv6dAgsKmtbq4N",
  "key24": "4zzggfGHhevPVWTG4iRHR4huPxYaUC73RXfFCs75aQgALrKFGxjWke6BGVvuM1CzUchvPxHQV1n3gAS6GAEDoL13",
  "key25": "41puV1z3AsAE2kfxGKrWDgtgRNG5NMSJk7MM2UrEUGevcw6QahYcPosdz78D2uovQpbf7LrcYxSWvDjXPDAHP73X",
  "key26": "3trUZSYVPVRwzweNfAW2oxWS7U7fYsV43mS1Axj8aaDSaoDjxWg6NQssJGViGQLs3FGXkAmozHsqebcpJGes79Wa",
  "key27": "ovyECnaTQQ2XijbKrmtAHufnu3UjHH4ZNow8PDc5YwfgjtKfdRsi68mbxDxepDQgn7TWzY8xNnZRzzaXcBmyfQ4",
  "key28": "VMxzpSnQAkkyXgV3GaBfLKaVgsjUHp42VfvuZJ9RPUBE8En3ZbQZiUcdZ7s3UvZMJUy1zPvP2r1kDUyn2gegAuW",
  "key29": "462cRydUnzMb3hMH1u3PeBRk6fnxxSbxn66H9Asc9jBGauhLVXXwQV7UBuUF8b7FGFoDPfQjD8Z57RxJmBQePDdW",
  "key30": "d8hGJDujN3VW5qd73os9GzZU8sQcGRZe77vCsTRxGvbuEXXFPLgHSHnw2Jqptxgj9L2qurEhNWd6rURSPXYagAy",
  "key31": "1iA4sCVfQcwqKKVFYU98SJrWLTnYgf5ya2PrHjaAmAkqQYaSiFXjQPPMLthX1d6Po6FK1ybP8Jjo1tk43tj43yY",
  "key32": "7TunD8hgcfJZJxppzRJLNmG718spqFe7nF3u8hSM7F3vjqdzps6kNe59BcpvMePQ9oHRGozPCA2Es2Fbiy2V7cR",
  "key33": "424e69bxZAbKx75UZngN8EJrbJV7grF66XJFpaSLHT2BsF6P8PALifd24Zd2xFDP3n45TXRxtHbbUNDY41VRMJQv",
  "key34": "2Wa3yrk5eGp91r85rUyfHEbnQjuwbNdCZAtAiFKSozdwMVrCxzJfVoSAZj2rvxukTYsGZMTsYDb82xh9G3RJRPno",
  "key35": "4kxj2VwqCcGqsvkoXvPWhvreqJBYs9jtp4atuWEzoKnP4QY8bA6Kc9AhMaJ3p6Wbm1q9842DatM1mDdynYNRqhow",
  "key36": "3v8oGQJdzcm1urYMMw3B4JoMuqkUsgebMLZvpwYLWPyB7ocCBzhesZRR1BTtarYhGUrvpsDfR8GLuBptDw3pEAmy",
  "key37": "2zWsrrkzxfbjykKJTPwHkW8e2rTvhP5BZ5tj8ibnhFs7M4CeH2zzkewEGB2jsKNNPqY4wLzoEvBXwWStJwjczRVT",
  "key38": "2oLD6osggXUp7q9RsD95vMwdTjeVC48tfNy7xYUWnmSiqHYADGmpJtyc2tXAhhtcpvnqZCv61AfrDmxefpbzfMVi",
  "key39": "64AB2yvtgaDP1RPE5N3GpRBMwjEnBUVB7xSyKFfY4HQT3o5SniPxPevEMperfSvm7JkVbR2DhJqj7VT6KNHKdjPZ",
  "key40": "kQMMTxD5CVFFEjy8hM4xzu7LZsxNUF6LpnTB4Ay13ysA8HHgVA2PKdhwPS66gcVWXBK5ohWDZvJPs3S6A2uKhqP",
  "key41": "3nwav49YMiRc1gLZcsdSczDHoYG93mbUiGZRVjit92j369ikRRe5ZNgtfpUi47CzofvEeBskuFoPquWuFygAqqU5",
  "key42": "52Xb3S21ZMLBoaTx3Qr8aR2165iLzJsEGYYHzYKcgGEYB8mYsCdyUErm9piYMz6f8hzKnBFgYtTXxmdut4cHPqSp"
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
