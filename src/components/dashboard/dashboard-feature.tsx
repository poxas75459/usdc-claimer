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
    "ySidSSvRDDMWFHoWBmYZk1cgvUH25TPNRwv7sdyCqiQop2HKqcvBueRtJfZB23xBQKL3rY7Xhi8ryzSek9Hv1e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fEPuDarDXukKswXtBQY5xcmronPknbQPZdvS3yUmmSYE8r21PHUr9EjkFGECW5XddCyUwFtZXT6nMpLZbts1EoA",
  "key1": "3hAYbymsFznwSozqGD4o19vGHecUNNstqGH6d4fk2imr41cKvjnHpb8xySeXYkgEepJ8Ui2bmpJQdSHwUrt8jgCf",
  "key2": "2GeYZJus7a9yaxYXRFnGut2DVESS5BVnWLhFFTSL2pNcWTkvC2xQy2R7AzU2WYRtSa8RgmEddaeL8Sp2bL9x5kMK",
  "key3": "4Rq2MmEb53rivkiVPtxpZzH5uvS7umv8uqnonwjnc6jpEC7uRBDsykykryXrtAZXT6DwuYDys9aAHvHnrxSSxeU2",
  "key4": "49Xi6yaDa4me7VpaMY3ricAHL6piBdCYKmWEssDrjsWbeh3L7UJmUUfxmhu6ULWSSCrGvYKTpiSsnrMYBoEEFqNp",
  "key5": "2VogLA4nmpBLJTaSwNzTakgR4p1oJDSJoXkTf33Hm1eppRW4SKD6TDcNPGwnjTNuzsK246ozcK7ydsg3Lw9ebWio",
  "key6": "5YAtvVEYbgwxms2ir9nNu7uUu3FvLDisVBiAiHwJypyUH9w8tQfsqB5VKgFJucXN6HuPRxfsN6BBGCh6ACYGnSFi",
  "key7": "34iWCfQbTKyu6VfTgK9qhHLyhkXLSVMUyQaJbDbXpEEx5Dd5wjJpHfS8t4RhMbbqKWuhiZBL1gyRDYPv7qakcyp2",
  "key8": "5FGsiwWsyBZdDsUiasQzfWHvchzrqpVRFzYamsuUEcnqdcePtq7PVMncZwCdRr5uzMZyRqREkyM1zayEMgNU2ZTF",
  "key9": "N2B3SC5iEosYoC8mjXX8miEhKo4TsgVzw697uyo1234pbDeaHzwi4w5YX2MYDHjBxAEsWZsXyxfzCkGQWYsA6jQ",
  "key10": "3CKLod2aR3ByCLNFzWVbpK3LRDaKiKD4vxSCHQJATE2f6cHsuCKT1Ft5BWq1dGQrp2mKsq9qyV7BaFReXbLfZFgB",
  "key11": "3uPeXhxQ8huHcS41iGC14t9TAVvkAPYbAgyCYtD2nmwyb9j1NiQPVeF5ShW31KcniXbzLPLSKc8hqT5DJkbctW2F",
  "key12": "4tKUWbgEsuSHyKeiG3EkLy1X8kdD1wkobHgckLCkqxHELuNC8HU61trVzTsTsiW4AgUrTSuvbMHbnGMwBj5dqy5x",
  "key13": "NZU7GqfuK8Q3BRN3GQPosTV3XDQQFePTnCGrNbhsC94gWA6UPJmoQyQm4ErymQQLrLBcxnpDBAefxBFFqTiozPi",
  "key14": "4CffAMjj6XWy6LRY4zJHkPudeJp2qscjJxfiWz6ZJfrCSpFv6gDAcQeKNmS6ud4DpwCNSFCSbvuu8u76iPfTwbqL",
  "key15": "62FbjJAiN48p67a2P6qvAFuAWrc4PxBbQPEapc3V8PQUYM1iGMP6x5TRUdUTQwhVmz4AczdvfWTxMzxSFdd7GkMq",
  "key16": "62Dsu9xfaV7i3RhbDVRLeEfGYhKYgXdzN2HFhffpKTQ6ciL6p24L74QpuJuruHHDetx35daRYJ5VD61PH1ZsHzqb",
  "key17": "4JF47kmqbcuwsbh29XqJXeQEwT7W6PCpMexTn7TUdjijgCFXHPwp511L8pXCtRcpV7q1karc8SGQuBP7nPiAqbZD",
  "key18": "Ckpe88GvRaAVwSPjffFcm8B2VMuhNugWA5FNDweaDfoewXZEye1kyU2cM7CvyL5SJVxm8TZyyN5rN68cWh4YyPy",
  "key19": "65HSVoL68HG7xEpRNLidMtz9GRrxfippQCFnVrPcwHEXtnstAJLCYtUc68SbqaTxSUMhUVuimrqdTfkik1CqsRKB",
  "key20": "R14p8eXxohWSFiibwwfEMX3JhcZjR61NFu9bXvq1NVxME5BFX8EXQ1cYDdL4iB6keghzWsbzP4umRHvTewKkSa7",
  "key21": "au2EWLFhHNpxucztfje1zTsUo1K4tcffdAx3HK6eqs59Y4sRro7xEVHWfrkur6b75vFMNntmpMCvBngCWX2HQW6",
  "key22": "5mjiJjLnUgB56P8j44EgfHaWCATQ6xkigtpLspDtWKfBCW2r7ebaR8cjaJSaqvTf2VVFfAtXK1hikQahqZYkz4AL",
  "key23": "5TdFitt2rsBRVERSs7136wfH5D4j62AdScDUwQnWJsB7exgCHHbwn2UKgsd8BKfMunjbKh3pf8ppHvENKxXz5HdT",
  "key24": "53VrxthWRzFstZtWUj3x1yqThZ84rgx4CRrig5cPSBF6nCGoXhHWhbPz4sL64jJrFnoTJbPDdwGoYUG26fm8vyLy",
  "key25": "5eCSa2F2UfESVFW66NDdxSxxVHnBW2SdNPdiKo1LBnDztRzexWF56b7oRKxhQak9LvLz1w3MnuTyjpEdus6EPaHy",
  "key26": "4zN76LaEbFG5ZDmLnqiGWqWKiygbMBbr64qR2C2Fw6BY5BoKxg4XQ9sfZdfHWtf4LyWWU1GD9Ae1vB19fVxrHbeY",
  "key27": "4r9enydRQKwqqkB9bquWz2PFMnvtFFiuZjQAaLimgx3m8oSChyCRsj18D3caUbB1ovjyj9aYJv5zA46BcnGd5X92",
  "key28": "2auuKz8HbbJr4ccd7JSQM9vTvRSy3G7nzFf38DMvcwZb1p8kKU5NviNQRzcV9qRKs8N7Z9CSTs3eew2XYvibCWJK",
  "key29": "5HXpfdiEmNXBwNzZMAc3YFziY1Nofk8HhoH3vgPJ4ZQ8ng2181HixpRwfepXizDGjPQa42fa2rApkDnCtu94areN",
  "key30": "XUCwZHdzANaS3wqQHFefpE4wei2x83VyzWoTgoy53Stp61A4sbs8NpsUmHeNK5AH35SREdCrWGdQWftkhq1fUt7",
  "key31": "VANriJXu1CdKhj3u8AFY5c3gsAQ3Sbjy7UYhJ7pjgRWkpJXqbLNHHuc3LmQLP8bRkAzkdaBNUj4tAUW9HNasAvQ",
  "key32": "3BeYogxF9ezQ9LxuRazsDNiSRitLvd4qyksfmihLEBU9dRUkkqzpPeaWdstu2CGurB5jAADdPaNtvHFHBBrJHHtW",
  "key33": "5YybocPhbCTCqyZrhHjk73RYaep7yjE1hNLFVoGTeJmPum5r74VXRRaF5WgWP99UXSZjiQXHYbnt3ZXTQMrYmGpb",
  "key34": "3fRbhabddJUYe1rE2yCgmyWJshSQgnTGbxZW6vzLDU872PgZBRYHA9L1jk77S8bv3LJZCSNoyLWYdwRohjyHgF4g"
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
