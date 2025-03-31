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
    "31xjCB4NVhfmD7Tw78wSffYwxMzFY8xQZZSwhbMVhmaU4epx3d9nBqp9x1QqsrXnaBVhKHRYkb21h17wHz5yZ2zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hwrrxPwq5YvKQNZUJoCYVGrDdemwPsUabE7SF9fzYPtg1Dom3igwQK5XVepPxGJdzCSs5EtoSgfhcBhv1U2aYha",
  "key1": "5HWM7As4JzT1JhM1r4Q4yqr7Cyz3vqTonMhZtqcZ7VY56pCUyCUwewyGL5g5nTKN1f9JL7mKehTfnbiqFm54d6vE",
  "key2": "4sQnVkydhsuCiYzH3Tyot2gQyiWokR9RLk2VreDE9xvRZsuBCqD6AYVm1VL7CXgtaFD5SbnXNE74QLUEXsyEDDa2",
  "key3": "4tcU9fWLrGn7nyvuHzJQSnms2Gz2Y59rC9uoN55i3HobJ1CigKHeUzyrK3DoBdWzGCxduQSdL67EEe7Ac7nnc8Wn",
  "key4": "4WDRCRCpXZs7wSYNZCSaYDVbwhiX97vwWFiD9vX7igZVYqArwy4f2LQ66acyCVxJmyY2RFs9yj1ZgX5gmpD91eKK",
  "key5": "fMedk4ZgK5s45QR14mxSBoU5tw3vQC4nxJpANEdDLdhcgxg9LPeHLWfEdtTwFbjE5chwZNqhLMXqN7CtfZ4k9R9",
  "key6": "4h2SvVVqHNi2whDSg6cbzNc9fvW7ugJtHhipgfTdEWfM7WgGWRYfJ6EYXZu7KQiVhhrm3YHT6opyfv3fdxmuC3E1",
  "key7": "5vMkPG7csT7owoC3yvgsQSG4wFFEnVPVsFaY5XTwMqYEJkCBWDrCTi8Duavft7sD7E7S6ed9czWFySnw96RWsRLZ",
  "key8": "MkSdxEgqb3XEUCXq9i59QY29CzQgLtMer7PDCEQ1J4QgsAdf7QSK5wc4jXwAZ5pWupRDS24jNbnBwcuyuv5Zrif",
  "key9": "B2D2Uasj5fz5hLStWEvQakXSRhENH8FasZsUEPQmumzq7EKHSV1Pqb53m4vyh9jpuGk3hTGdFSVY9kaKyzF4qge",
  "key10": "QUKceAf3qoDKRtisbDVkrwtx8uJ9K7LViP1FRR4TZzQoM1YYwvUFUtcB4KonfFMdhzzKGXE7x72Pf6qGsnKxS84",
  "key11": "D5qYfH7mpbhN58Xzb4VaUHB1wU7WRgtZsK7NwfRfF6hjpeUqR299zCLzxVun3jW42ACvTZKobtAydsxKuPg1yjX",
  "key12": "T5va4BFGQf9SkNnnS3ZWU2ya5xEz3nzx61CoBe6Lh6Dz3jZ7Mk1bzpJc9GgmsyaLTq1M8fq7GRVGmJ5kCzgWNv7",
  "key13": "4eMZwzEdfFuwhrUk2EjXXzfELvFACgi27X8riXJZUzLETrwWiQDxwRKxoT1i2Q3LD7bZYZXSmE5rc2fGyuTWeyPR",
  "key14": "2CuuccL9uT761QVfeYviU4hWZVj9QCjtf2WYpnSUwCYtbriCFtgLrdxA7WNbm9jofFyzLzHLJKAxFwwjYrncj2kZ",
  "key15": "5qCAv2c1mrbLBYnEK9XL6qo12Zvym3DMXk1z2gXxJ21uH74KkmHPXowo2xRJs6TkVh3qhpqFbpShSP67qPA59dEY",
  "key16": "2Vg2DAj6EJut9LiNU2HahZ6raQaAZQtm4TS3kCzTdeC7yntR5jexpGapNp9aSiSH3GZmpM7cWawFE5EqS3ot6viH",
  "key17": "4tmE6h4jPAmetNh4D3gqni5pCL3EuMe4dr8ZEGLrDu9wqtNSYcqxLiL2DUTsxaxLvxsZ6G5Wpm5yyF64o1q2XeZr",
  "key18": "5cWbSKkHof1CL6bdj1TCQzr8UN8MAS41uKjGE4EQ8pJwTC1LbKfHv3x8rnZoybz4DMKtWw3thjV578hkfFNS9ZTk",
  "key19": "4KwvzQq8DcR8Qs35QAwfCPGWs5KrRWMm3bWGZhwRitVmgrL4G3XBRgw2GnmpMxxBrVWenJ8ypzqmy58yrx3aLEoY",
  "key20": "3tDYrntTsTSrgsJDKux6FQ5GxdUCPQBhuSEMDvMQDBQYVdXJUjhPzs6omHxLGtpmtJtJ2ENH6FY4kCRCDTPssuk9",
  "key21": "ugN7qcK2p2APinyeEMUf38LUtfesJExHRW5Dgr1CoJjgL4LoeSSMroc58wbsmks4N8ja73htytoTg8iib3LKDKt",
  "key22": "4uctXKf3widkRhk2N22GJomxMA5NpeZMz1CaTJrbKe7VSdRcFkCVPzKcMKUH1aGjctqNnX1XsGhKtVWYDn2Vrfzb",
  "key23": "iNWHwGPP4SRDVDvpFkyTdnv2XU1EfpdzBUuHKdkNtJ9ZeyGbbEuCR7YP24b58k1cywowvY64ZraSUyb8K7PgeGT",
  "key24": "2JMfMQRq93q318bdPrX562xnSkc3WFjp2eUVqHGPz1oqhsnygGgeDpGjLyzDrZ3HwjuAbdNFbHrFfX1pvDJXzgXj",
  "key25": "2LFD7rRUTR7nCbEAnVK5cCjvsECNxfr93LxKqn5WvNqufHDhfBKVG1vm2PYkNRSaEBvdBi3vx4XKX6X64YU214jS",
  "key26": "3MzVWq7iMgXyaQ375RuCRFNQ6yy3C3my5XZ53XqkPfDe4iEoJCzSttqwMPGKe9CLBFBmsfVXRhAH8TpHvryNFqjt",
  "key27": "4WZWLLfgHrrPU94VbpPQ1Ny198HpYPCtxJ6hoGh5gy2DV1WMMqA7UKuQWZoWwM4URd9XnrtnsgJohqwhLbS9HuwN",
  "key28": "4kDaaZmUjRUk8byswK28kjcoy3V47aWKjxgoYoki3KNZNPT9nY4Ype35VGwksYR1goWDYtiFxZpQebqM8sdAQQng",
  "key29": "5MCpjqcCCptupUC46arP7x5R4JttNxQeSFYsvZyACfdRyoaZoSvDCY5MSqZj4emP1FGacbRSrYRzNdp6jAcPXgYP",
  "key30": "2wDRoNAKepZFa2pMhrrrzcbRSgon8ydCThyZfv3icd8DxMQxFSKUasuNASexDQfN4m7CLioG5xcEuQBkJaY85q14",
  "key31": "DSGeimCYhUNan3aUvYcW6vWj7p1AxGuigFDTr5qLcgtejBMEoppj3Rrx136jVJU9bwGPbb19iZEc2HSRDhDNmLK",
  "key32": "4eB1hZrkP5rNf5JFiZfveQWgN2fSGK665N2gfyZSdUnxtn5RcGqgHabBKhAoAYGHNVke7HB7uYyaBXsoHSGqa3wt",
  "key33": "5B59SVHSM3DhmTUpUpimFNdTQgBH5dnr4F9bkGfn7azmjE5bgTw9eL7RyAmm1k7j94zzSBE6p4wecUzqRVqtSngQ",
  "key34": "5yPAbVZUftPxV8atfc7ApcBMoKBjFudMucFoV9ayMJ2US51dzwWKW1KmdKDLtK51vq2Dg884Ji6gf6ejyNWT5SKa",
  "key35": "FvZzahHSYPmu16ipd1x2edcCxyuVwYWu4c471RmPcGwse7XCmTQRStSB2a4h3EEHEG1ziTfxsboxvvmNthfDP6c",
  "key36": "2TUiS1Tbico1ZuMP1Zf9tWKQCHchyqLW4b7VUQcuZvn1UiM5PQXKzFPX8oGDJ5DE5oBbELS92oJ6ivYWm3UVudNH",
  "key37": "2nB8qqRK9Sjvki2XJozTo2WVb4kLYUWtg7gs9rZFi1njZ7JvTT1xcj2ka2zckntjhYSj4wnPvS5dM2FWFzi4XD2F",
  "key38": "5Q4ikNVkLA2RHG4ziNnRykXtBVeYovF3bFwzYFcioaAwiGjtdfpZcdVGUBUiWUu5i1YUNdc3DmLkhSyQjiQAyyQx",
  "key39": "2TLEYjCWFHtKmpAr7HMh2vpj7BfSFqHZViXSz5ueCYcxghHfqwYRJj9oyGxRDbE6pDHHHfcteWi69jGZnQxQxSZR",
  "key40": "5q24mUQVohJCh6G8DBBfQm5qYzw6W85eUnWuLPVpkEEMjinme7EvUAcCvTJrSrp4w1rCDJN4UU8B1Z834XStH55j",
  "key41": "ZEfVxzfPhDea4XuWLUnE8xUswocPJ3mmHnaupJJFn3fbf23gWjirLQHxpefTXTetA4Nh7uQ3tCTc75netsYq1Tx",
  "key42": "5sALmRxLNVeesVKCs51DxejTiAqyhwfTJn2jMjjRCg9qNiVspTtGsbpH1SeCHYuW5o96eS1BNsscP752sVRXLGrF",
  "key43": "3gCYWpUTENTAykqvoB4XMQJc9qszsG1fi4tiBtLF2gQpZdrjBxdr8YvGNnTf33avcXHDxkLD2YDY2YSQfqtM3e44",
  "key44": "2MCXuMYSvrM5ne57hoPHqGx1u8xB7K2khC9nBuQD8quSzY79JydZtq4NQbxDrC5SPTHFofPM2WQxjzZLzzkHL454",
  "key45": "3CTUGMtMXrbuWAdaguE11yX3trHasCfh4W8h6MmNwewJXh4n5dXZQjWTzZxdC3NfAMzzwuSPsGCRosqegDGnTdW6",
  "key46": "5BVzPEz9VvDCfwcKE6EevvR38dMKvsmEbrmUdz2QbNyvukg434oUvxHLghmh5ZCpND321irDU6m6MgkeNboxiaZB",
  "key47": "24BbwDYuxbgjHSiGffK5JRwo8Wj5yn8Q9Bh3SFC4NjnLTLEGyd8ZD6iyqTTgkxBKaDrL2ptSyDAjiN8y1KrSbpAx",
  "key48": "3947RErRg5vNHb6S1U2sobHjG4u5R9dBApAaN333JFWCtc735K3dgiweAZmo4qsh2R1j2GZzomS1QkNxqbMbCaDr",
  "key49": "tDotnbcFiPC6NAp86aNgxHkSAYspoGNHpJBtn7oMjhrbg9kHMpXrgfpE5uPs2E6x7ESTGdr8MzMoUJzzVBytJN9"
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
