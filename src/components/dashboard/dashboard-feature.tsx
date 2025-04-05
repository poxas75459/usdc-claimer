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
    "4x4kGiTRv9b3S1dLjVnMegwfUmBXHMivLRYAifuScdBjC5762stn2Riw75fLgacGTN1airwqiCYVZFnBAK4wiYXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wDmsV5d31LdPX99vn1nv22ey7dVH1FhXtmaLzrPwiu7YpNhTSvJrTkjTLhHtpbj6TSzgT6AnZmfXQvgMc8GXpP6",
  "key1": "2ZRFyrvCECVFR8LxwH1wUDbRQvXEcSZMTGp6Tuj9ZG48RXYjvBWfSN5G2PKR9GV1vDF9Tficcp3D71EviHBqcCYD",
  "key2": "637pEkAAfbk6NAy9H9rSiy6DvBYG8oidyojWtapkgk1UdfAQ7kTE1nThMSQgmQHUqYgNDTxxQ174GcykRQgm1zvR",
  "key3": "4M6man9pmKoRj9DmW2zm5Ss1Pmhn796X2wAGUxgZqaZf61yrdn366f9hTFesAUKNBZx4GKEdSeHw4qadv2xH5LYW",
  "key4": "2PAFtu8JkETtLpCVZmwcNm8gbJxvLtm61VgpBqyE3kuZqkVztt4W87V4hYMkBYMjsjQb4JWBsb6AVULxVU78JLje",
  "key5": "45oriSbqSTvnyFSzGhPeXZ67VbA4bahRo3tyA3H1oGFq1d1tpx2kxdiCaj7muBqKiMYHMZiDwCzpkWwRVYwonthe",
  "key6": "3svmMF21DdrJc6cgXqJEgPpEL8L9w4iafjGERrKutY5oyFbWyDoykJRc9U2q3Eh7PbT5zamzm2H1bk8Sr16Jwco9",
  "key7": "2dyCsFjbtp5aRgdCL97qujv2tCo2aE1owRgJEJYrXxtKWL2YnnismnWsvFXB8Ae5BjWwJynF5kT7XCQsURHBW1yh",
  "key8": "4gp9soeXZK7oRF7eL8RsuXiZD25yxtj1WG6eDxBr4rjNnfaC1zkZD6ym3KcmDkZo9XV8N3C9hKtRCvkF2zznceCZ",
  "key9": "3pAaL3CDJn9RR4YkTkUZkKLRSvuWovxNwT1V6LWRJ14yezFjPsNrVzRAqveYPAkcvQsr9rXCsET4BhJz2YtyUDPg",
  "key10": "2AD1o2hHazZmAqgWNE1sq4Q9sPbR1eFE9NqvL67tyzC11FqKMsAeVmRcTfMJpuvaGCVpJhbKUKrf4fsmuB7FKwrD",
  "key11": "66kM8G2sDQjn1DXPM2NKuW5BkRAsrY21SQQ1FBTSfx5Dcx3Xt1zJoWCfDbE86SzhofbFENHHaYVvpTJ4rA6CAFK9",
  "key12": "4p21HbiitPDXQyo5FoSYKGBJ6YRg2QMFRYyQNYA6MoPrdAe7DwPgALRRxygJzkX7b2t9v4y98Yf5r1oYMSrhmfS1",
  "key13": "24ku1J4VPUEVKgx18t3dpCV2DgQ4eNJu4FCWXUgTFPpeYeKFhKFvqSKYrmY1DVWVgvw2pA7xX7jLa2FjQZkvYGV3",
  "key14": "5RznnjD6WHGQfgwUWZ1jRbxksrS14nwPGNXfPwEq6JnLsEH3Ffgbq2EMhz3FBdfYaQ2hec7q13WzqKrmYf3wvtVa",
  "key15": "2c4yz83KmWde3SuiuCShfcfF2USEwhtddU36rYAHkwNmtAyw93Kw6kvfptfPXx33p9iLqQdcxRzm82vSn1UReDH",
  "key16": "4MZRhfnvQzmVsjiPtLjGLKpDMjPMsrEyHDAzdk3YQKVQ4TdLFrvqgDAmrh47dts8BPDGpQQc54btFZnyHxkN15RP",
  "key17": "TRUTCFCCSeJhjmZcjTchnYo2nVPuaXopjZznTzEgUCA1tYxEN25CNQQ7Rj9EML8UCYt3EPtN9XiQ95hpdJmkdo3",
  "key18": "3VN49MugVQh8t9Qr97cQjofcHEGgeHW6ysYyowLf9BuAvNQtCtzac97LWJfbfVkXV6QFcR7rjtDYfw5b8SyKBWxg",
  "key19": "4G4eLqa2zXtxpCHqd1uWPci9MLKfoAgkC2CAueg7ArdrJboW3ChmUka7miZ3rhBZJkwKAwSGB8xDLWgGA9rHuHWY",
  "key20": "3W83FstapuEHCbggzkNZhTrdVWiuMiDjzgYyNN2ECi38tS6Df3ZRMDfmzb4WrsGQUqbgZpcf6bvHbf79kqHz4oU8",
  "key21": "HeLtb1ujwHj6a6ki4ooSntRtnYJUAbg4RDzsCh65fRszR9Nu3wSomiAXkJdVUq5WkXJiQwNintKqV3yH935rUpH",
  "key22": "2cfdaqUAJVa1ZsBhqG8igwNfUNwDRTsAMxVeQX6ozgjFd4uNfRFSd7BYDWcXhHpkZC38gXeqyW7cMaTDE7q3hZeD",
  "key23": "4hJNfuvtdBxSUjQoFvaw6bYW7Ej7RAZs1EFqXFkgJMoJZB3NMjd36wApQBDAMU3f1LZ4qjZcbBgCho1FW2W64KEu",
  "key24": "3FkaZEtvP8vf8zJeZ1rE1YoGj3vt5Ge8bJN7FMiDLXTZjyWYzBhZAAT5Sw9vKhCPAjjwerjEeH6N9zygt8scpAf6",
  "key25": "4HBWSUbkUByA5PCQ4Dzt3Fwe5EkwVazTb5TYE4fpSVAsBMiMcCgZ5kZJbikFn68JEC7M8PtH5qtABECWJPo1uyES",
  "key26": "3KnZrN2YYYoRw6CnMmNeUHShMDSoFr9ATqhocth9FmzgDRixAMvbcbQQbUht2mtGvqa89xvBYMyNsRvnV8TgE3sA",
  "key27": "124R2uGkScsToAjV9aTamr7SbuLQvsJgcCgEdC6H1UdUzx1yBnxbdz58tiqpgEYLZbU8BGXDK9pPJAgJ9Cc8ortc",
  "key28": "4vvsdDQ2Zx8tvojtUiGXC7y4YRsYuqKdx3HErTDLb54NNyDd5ymf1MLgxYvi5Zx9dxMUQLFD1bWS6WUpisbhe7i7",
  "key29": "4bWUGaaVTr6UtSMMWNn9paE1iutC3VLCxX6koYtLF4hrHYrwEGfiDU8QRg2W5YJixmiYnRhkUuirZ17wJtuGsr5",
  "key30": "29Yk9xcQhsT9LV1WtTHcNDtyT84bRc2p2AJ9cgaMphnUmzJ5CSTMpKJop9ejQSEW8VMfDUmj8rze4n7MehsW9VP1",
  "key31": "2WMZZnPVZ7xb3yuqFRQPJDLmYauvY3oX6ZzN4WNDm2i67wKyzUpcPYDAovWWPJjvu5TS9jnUKfa7tMGdsswwUuq1",
  "key32": "3mh59p2Tq5F1ucvUinUDomw3KJD65nXYHv5fYquEPc6yuK1JZSQ4vziumM3giWBJzdB7umwoEmaDwo2GRWqtGN7A",
  "key33": "31yJDw8UNDYgycqQtqZaCPN3JRuZytNnVLQRx9QVucfGPfnyeQFxtYgc4bSP9iA5pcgcoYMkyjG2nGnZYXomdTpK",
  "key34": "2PDnAKCD7MZ4VN4rbNYvXfVav4xSUSV5eAJf5PAmVGUFUcgBDptGWc5xutopPBZFZjVHx8q93PfvgRFA5cqABuLH",
  "key35": "3tAhc1BuxrJHGjZdXEUvxcc5NsBBR9aR5REJ74wRji7L3hnxUAp6AJaVK7d1n75JcjBsGa4zkqrFKWvUoU4aSuKD",
  "key36": "58hZXXGrPWkUaqoZeAFEi3QG5UVj5DRvPYvvMo8WmQZYDkDkop9eutxyJxzsVj3XkF8VfYbZFz3ZozoZecaHMegB",
  "key37": "5G1rnGerWL91tunmmG9xHvyVv4T8bAbN5ZZS5XVVhMBp8eBQJef3GhHzRnh6c5n4yTLqhM41XVDQkeAKYa4fYCe1",
  "key38": "5UE4ijqQqmWiPZT29WaFuor6r3kAJmb1jWm7PdeDiAYRcYVb7Ynyfh2KPQRoCHymGNA9rhqDTQFwC3LEsujvyfkR",
  "key39": "4rV7XzULsrQZP1Ssnuc8bvZp7CrXtCq6gYDJ8jUw57RMbiXeRvwYDhCHfSKtoZv1xUUe1gqP6HF5jBGzngjbnJkp",
  "key40": "5SJhDXtM8wCFJaVENmHgLnQEaMHkzX2aRYv484qr2NwnstvyaVuL3jCjBsEzRbLePxwzKGyaxsa3JRSkGuZsd7Rs",
  "key41": "5Sefd9tHvkG8mqfc9J5V43cPRtnJpMTxKk7XYL8LXu6YhefinmuFDBKpc3Euwz7MvnJQhmHRvXN7RfAGcyNuZxt3",
  "key42": "5Vr7x5CGij541aidUK6n3jF5hSeZ3dUrTSf2TJedywjVus8yW1RTh8yrog2pmexuqxCSKoniMAGfXi6iFbNhGFNB",
  "key43": "oGpv4VoZKUprEi8CdNbAtAM4BWKM2Nheq2eUSFhR2QuHw7UohDPD4h9yJZ43dBG8amY6NcLygffWdpwME6YmJiZ",
  "key44": "2yxVHh4osHfNm1oTX31nWGg8JxCGbhX6iPiLbTNywVhwVV62izaZjbJzt1PfFsTmj6veKUPwpaVMpa81SbRgWhZM",
  "key45": "27zVYNzjhTN6u1xEKTc6Ex4vFTPViMgT3KStNjTbSvwDgY74LzAJFTQdDQJTtZfkXNsZCapCWKTN6kNCj7DvQar9",
  "key46": "3BX1pJ2eVrjEcSefkzQ8dVkqdTryqgoZHy1e27uAsu6gvFWySLWReibM1vM5fcj13CbBHRUKD2gNduhe255XX4ka",
  "key47": "5S5jqjzmfnzTz7LjQvemGDvtmVDQkuoNWjBJ2nvnwnom94p5XKjSYqhHuge5eHgAq6vepxJTx6AKiyioQaijS748"
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
